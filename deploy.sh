#!/bin/bash

# Script para desplegar la app de React en la raíz del repositorio

echo "🏗️  Construyendo la aplicación React..."
cd midalytic-landing
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error en la construcción. Abortando."
    exit 1
fi

cd ..

echo "📦 Preparando archivos para despliegue..."

# Copiar el index.html antiguo si no existe backup
if [ -f index.html ] && [ ! -f index.html.bak ]; then
    echo "   Resguardando index.html anterior a index.html.bak"
    mv index.html index.html.bak
fi

# Limpiar assets anteriores para evitar conflictos
rm -rf assets
rm -rf vite.svg

# Copiar los archivos generados en dist a la raíz
echo "🚀 Copiando nueva versión a la raíz..."
cp -r midalytic-landing/dist/* .

echo "✅ ¡Despliegue local completado!"
echo "👉 Ahora ejecuta los siguientes comandos para subir los cambios a GitHub:"
echo "   git add ."
echo "   git commit -m 'Deploy: Actualizar sitio con versión React'"
echo "   git push"
