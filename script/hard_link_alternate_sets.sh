.#!/bin/bash

echo "===== Alternate Set 1: Student Project Records ====="
mkdir -p records/2026/february/week2
cd records/2026/february/week2 || exit
echo "Student project data" > project.txt
echo "Notes for project" > notes.txt
echo "Before hard link:"
ls -li
ln project.txt project_backup.txt
rm project.txt
echo "After deleting project.txt:"
ls -li
cat project_backup.txt
cd - > /dev/null

echo ""
echo "===== Alternate Set 2: Company Report Management ====="
mkdir -p company/reports/2026/march/week3
cd company/reports/2026/march/week3 || exit
echo "Sales data" > sales.txt
echo "Summary report" > summary.txt
echo "Before hard link:"
ls -li
ln sales.txt sales_copy.txt
rm sales.txt
echo "After deleting sales.txt:"
ls -li
cat sales_copy.txt
cd - > /dev/null

echo ""
echo "===== Alternate Set 3: Backup System Scenario ====="
mkdir -p backup/system/2026/april/week4
cd backup/system/2026/april/week4 || exit
echo "System configuration" > config.txt
echo "System logs" > log.txt
echo "Before hard link:"
ls -li
ln config.txt config_safe.txt
rm config.txt
echo "After deleting config.txt:"
ls -li
cat config_safe.txt
cd - > /dev/null

echo ""
echo "===== Alternate Set 4: Personal Notes Organization ====="
mkdir -p notes/linux/2026/may/week1
cd notes/linux/2026/may/week1 || exit
echo "Linux commands" > commands.txt
echo "Practice notes" > practice.txt
echo "Before hard link:"
ls -li
ln commands.txt commands_link.txt
rm commands.txt
echo "After deleting commands.txt:"
ls -li
cat commands_link.txt
cd - > /dev/null

echo ""
echo "===== Alternate Set 5: Server Log Management ====="
mkdir -p server/logs/2026/june/week2
cd server/logs/2026/june/week2 || exit
echo "Error log data" > error.log
echo "Access log data" > access.log
echo "Before hard link:"
ls -li
ln error.log error_backup.log
rm error.log
echo "After deleting error.log:"
ls -li
cat error_backup.log
cd - > /dev/null

echo ""
echo "===== Script Execution Completed Successfully ====="
