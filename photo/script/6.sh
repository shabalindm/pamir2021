cd ../..
rm photo/6/*
for file in DSC00652  DSC00692 DSC00714 DSC00747 DSC00756 DSC00784 DSC00813 DSC00885 DSC00897 DSC00945
do
  convert "photo_original/6/$file.JPG" -resize $p "photo/6/$file.JPG"
done
