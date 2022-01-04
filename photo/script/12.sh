cd ../..
rm photo/12/*
for file in      DSC02595  DSC02621   DSC02680   DSC02706    DSC02847 DSC02861 
do
 convert "photo_original/13/$file.JPG" -resize $p "photo/12/$file.JPG"
done
