if [ $# -eq 0 ]; then
    echo "Usage: ./build.sh <folder_name1> <folder_name2> ..."
    exit 1
fi

for folder in "$@"
do
    mkdir -p "ex$folder"
    echo "Create folder: ex$folder"
done