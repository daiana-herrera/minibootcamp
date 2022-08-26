# minibootcamp Angular

instalación:
npm install -g angular/cli@latest
# una vez instalado creamos el proyecto:
ng new nombredelproyecto --no-strict
(pregunta servidores...respuesta: N)
>css
cd nombredelproyecto

# Para inicializarlo:
ng serve
# Se abre en navegador:
 http://localhost:4200/
 # Agregar bootstrap:
 npm install --save bootstrap@3

# Luego reemplazar el css en styles, en el archivo: Angular.json
 node_modules/bootstrap/dist/css/bootstrap.min.css
# Crear componentes en terminal:
ng g c nombredelcomponente --spec false (no me reconocio spec asi que le borre el archivo de testing)
# si quiero crear un componente dentro de otro:
ng g c nombredelcomponente1/nombredelnuevocomponente 
----------
# GIT
COMANDOS: (ejecutarlos dentro de la carpeta donde quiero clonar y guardar mi info)
git clone 

git add .

git commit -m "conmetario antes de subir"

git push

git status 

git pull

