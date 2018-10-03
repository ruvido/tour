txt=txt
posts=_posts

drive pull -no-prompt -export txt -exports-dir txt -explicitly-export -same-exports-dir ../date

if [ ! -d $posts ]; then mkdir $posts; fi
cd txt
for ii in *; do
    file=${ii%.*} 
    cp $ii ../$posts/$file.md; 
done