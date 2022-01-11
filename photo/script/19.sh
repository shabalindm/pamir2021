cd ../..
rm photo/19/*
for file in     DSC05606 DSC05623 DSC05635 DSC05647 DSC05687 DSC05701    DSC05814 DSC05844 DSC05847 DSC05868
do
 convert "photo_original/19/$file.JPG" -resize $p "photo/19/$file.JPG"
done
