cd ../..
rm photo/11/*
for file in DSC01951 DSC01962 DSC02027 DSC02111 DSC02125 DSC02141 DSC02149 DSC02318 DSC02384 DSC02128 DSC02174
do
 convert "photo_original/11/$file.JPG" -resize $p "photo/11/$file.JPG"
done
