#!/bin/bash

# 1) Create Directory Structure
mkdir -p practice/2026/january/week1

# 2) Create Files
cd practice/2026/january/week1 || exit
touch file1.txt file2.txt

# Add sample content to file1.txt
echo "This is file1 original content." > file1.txt

# 3) List Files with Inode Numbers and Permissions
echo "Listing files with inode numbers and permissions:"
ls -li

# 4) Create a Hard Link
ln file1.txt file1_link.txt

# 5) Verify Hard Link Behavior
echo ""
echo "Deleting file1.txt..."
rm file1.txt

echo ""
echo "Checking if file1_link.txt exists:"
ls -li

echo ""
echo "Displaying contents of file1_link.txt:"
cat file1_link.txt

echo ""
echo "Inode numbers after deleting file1.txt:"
ls -li
