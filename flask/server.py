from flask import Flask, request
from flask_cors import CORS
import os
import torch
import torchvision
import PIL.Image as Image
import torchvision.transforms as transforms
import matplotlib.pyplot as plt
import numpy as np
from werkzeug.utils import secure_filename


app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/*": {"origins": "*"}})
# aquí se carga el modelo solo hay que darle el path
model_path = 'C:/Users/Josemari/Desktop/Ingeniería del Software/IA/best_model.pth'
model = torch.load(model_path)

# se cargan las clases con el número de clases para utilizarlo más tarde
# se puede cambiar para coger la carpeta birds
clases_path = 'C:/Users/Josemari/Desktop/Ingeniería del Software/IA/pajaros2/birds/birds'
classes = os.listdir(clases_path)

# se crea un transformador para las imágenes de test
mean = [0.4704, 0.4669, 0.3898]
std = [0.2037, 0.2002, 0.2051]

image_transforms = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(torch.Tensor(mean), torch.Tensor(std))
])

# se crea una pequeña función para clasificar todas las imágenes de los tests


def classify(model, image_transforms, image_path, classes):
    model = model.eval()
    image = Image.open(image_path)
    image = image_transforms(image).float()
    image = image.unsqueeze(0)
    output = model(image)
    _, predicted = torch.max(output.data, 1)
    return classes[predicted.item()]


# se crea una lista de las imágenes de los tests que utilizamos
# cambiar el path si es necesario utilizar otros tests
tests_path = 'C:/Users/Josemari/Desktop/Ingeniería del Software/IA/pajaros2/submission_test/submission_test2'
a = os.listdir(tests_path)
a.sort(key=len)

# se crea una lista para almacenar los resultados de la clasificación
resultados = []


@app.route('/upload', methods=['GET', 'POST'])
# se define la función 'upload' que se llamará cuando se suba una imagen
def upload():
    
    # Script para archivo
    file = request.files['image']
    # La ruta donde se encuentra el archivo actual
    basepath = os.path.dirname(__file__)
    # Nombre original del archivo
    filename = secure_filename(file.filename)
    upload_path = os.path.join(basepath, 'static/archivos',filename)
    file.save(upload_path)

    # se guarda la imagen en el directorio 'uploads'
    
    # se clasifica la imagen con la función 'classify' y se almacena el resultado
    resultado = classify(model, image_transforms, os.path.join('static/archivos', filename), classes)
    # se añade el resultado a la lista de resultados
    resultados.append(resultado)
    # se devuelve el resultado
    return resultado

if __name__ == '__main__':
    app.run(debug=True)