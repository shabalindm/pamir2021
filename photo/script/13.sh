cd ../..
rm photo/13/*
for file in DSC02922 DSC03001   DSC03046 DSC03053  DSC03114    DSC03066     DSC03161
do
 convert "photo_original/13/$file.JPG" -resize $p "photo/13/$file.JPG"
done
