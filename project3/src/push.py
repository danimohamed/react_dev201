#!/usr/bin/python3
from sys import argv
from os  import scandir, system
import os

def main():
    
    directory = '.'
    file_names = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

    for file_name in file_names:

        str1 = f"git add {file_name}"
        print(str1)
        system(str1)
        str2 = f"git commit -m \"the file {file_name} uploaded\""
        print(str2)
        system(str2)
    print("(*) git push")
    system(f"git push")

if __name__ == "__main__":
    main()
