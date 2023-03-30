import os
import torch
import torchvision
import PIL.Image as Image
import torchvision.transforms as transforms
import matplotlib.pyplot as plt
import numpy as np

#aqui cargamos el modelo solo hay que darle el path
model_path = 'C:/Users/Josemari/Desktop/Ingeniería del Software/IA/best_model.pth'
model = torch.load(model_path)


#cargamos clases con el numero de clases para utilizarlo mas tarde se pude cambiar para coger la carpeta birds
clases_path = 'C:/Users/Josemari/Desktop/Ingeniería del Software/IA/pajaros2/birds/birds'
classes = os.listdir(clases_path)

#volvemos a crear un transformador para las imagenes de test
mean = [0.4704, 0.4669, 0.3898]
std = [0.2037, 0.2002, 0.2051]

image_transforms = transforms.Compose([
                                        transforms.Resize((224,224)),
                                        transforms.ToTensor(),
                                        transforms.Normalize(torch.Tensor(mean), torch.Tensor(std))])

#se crea una pequeña funcion para clasificar todo los tests
def classify(model, image_transforms, image_path, classes):
    model = model.eval()
    image = Image.open(image_path)
    image = image_transforms(image).float()
    image = image.unsqueeze(0)
    output = model(image)
    _, predicted = torch.max(output.data, 1)
    return classes[predicted.item()]

#se crea una lista de las imagenes de los tests que utilizamos 
#cambiar el path si es necesario utilizar otros tests
tests_path = 'C:/Users/Josemari/Desktop/Ingeniería del Software/IA/pajaros2/submission_test/submission_test2'
a = os.listdir(tests_path)
print(len(a))
a.sort(key=len)
print(a)


import pandas as pd
import numpy as np
#aqui rellenamos dos listas una con la id de las imagenes y otra con la predicicion para esa imagen
x = 'Id , Category'
lista_Indice=[]
lista_Category=[]

tests2_path = 'C:/Users/Josemari/Desktop/Ingeniería del Software/IA/pajaros2/submission_test/submission_test2/'
for i in a:
    l = i.split('.')[0]
    lista_Indice.append(l)
    lista_Category.append(classify(model, image_transforms, tests2_path+i ,classes))

#creamos dos arrays con las dos listas y una tabla con ellos que pasamos a csv
array_de =np.array([lista_Indice,lista_Category])
array_de2 =np.transpose(array_de)
print(array_de)
tabla = pd.DataFrame(data=array_de2 , columns=['Id','Category'])
tabla

#aqui transformamos la tabla a csv cambiar el path para guardar donde quieras
tabla_path = 'C:/Users/Josemari/Desktop/redneuronalcsv2.csv'
tabla.to_csv(tabla_path,index=False)
