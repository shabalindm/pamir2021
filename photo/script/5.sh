cd ../..
rm photo/5/*
for file in DSC00440 DSC00444 DSC00470 DSC00538 DSC00590 DSC00605
do
  convert "photo_original/5/$file.JPG" -resize $p "photo/5/$file.JPG"
done
