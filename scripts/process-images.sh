#!/bin/bash

# Создаем необходимые директории
mkdir -p assets/images/design/{thumbnails,large,hero}

# Обрабатываем каждое изображение в папке source
for img in assets/images/design/source/*.jpg assets/images/design/source/*.JPG; do
    # Пропускаем, если нет совпадений
    [ -e "$img" ] || continue
    
    # Получаем имя файла без расширения
    filename=$(basename "$img")
    name="${filename%.*}"
    
    # Преобразуем имя файла в нижний регистр и заменяем пробелы на подчеркивания
    name_normalized=$(echo "$name" | tr '[:upper:]' '[:lower:]' | sed 's/ /_/g')
    
    echo "Обработка: $filename -> $name_normalized"
    
    # Создаем thumbnail версию (400x300) с меньшим качеством для быстрой загрузки
    convert "$img" -resize 400x300^ -gravity center -extent 400x300 -quality 70 -strip "assets/images/design/thumbnails/${name_normalized}.jpg"
    convert "assets/images/design/thumbnails/${name_normalized}.jpg" -quality 70 "assets/images/design/thumbnails/${name_normalized}.webp"
    
    # Создаем большую версию (1200x800)
    convert "$img" -resize 1200x800^ -gravity center -extent 1200x800 -quality 85 -strip "assets/images/design/large/${name_normalized}.jpg"
    convert "assets/images/design/large/${name_normalized}.jpg" -quality 85 "assets/images/design/large/${name_normalized}.webp"
    
    # Создаем hero версию (1920x1080)
    convert "$img" -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 -strip "assets/images/design/hero/${name_normalized}.jpg"
    convert "assets/images/design/hero/${name_normalized}.jpg" -quality 85 "assets/images/design/hero/${name_normalized}.webp"
done

# Создаем фоновое изображение для страницы Design & Engineering
cp assets/images/design/hero/general_industry.jpg assets/images/design/hero-bg.jpg
convert assets/images/design/hero-bg.jpg -resize 1920x1080 -quality 80 -strip assets/images/design/hero-bg.jpg

echo "Обработка изображений завершена!" 