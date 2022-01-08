cd ../..
rm photo/16/*
for file in  DSC04811      DSC04266 DSC04327  DSC04536 DSC04555 DSC04575   DSC04630 DSC04635 DSC04649  DSC04718   DSC04758   DSC04863
do
 convert "photo_original/13/$file.JPG" -resize $p "photo/16/$file.JPG"
done
