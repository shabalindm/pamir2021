cd ../..
rm photo/4/*
#for file in DSC00009 DSC00023 DSC00026 DSC00044 DSC00054 DSC00060 DSC00085 DSC00163 DSC00176 DSC00201 DSC00216 DSC00235 DSC00267 DSC00306 DSC00335 DSC00359 DSC00365 DSC00374
for file in DSC00009 DSC00026 DSC00054 DSC00060 DSC00085 DSC00163 DSC00176 DSC00201 DSC00267 DSC00306 DSC00335 DSC00359 DSC00365 DSC00374
do
 convert "photo_original/4/$file.JPG" -resize $p "photo/4/$file.JPG"
done