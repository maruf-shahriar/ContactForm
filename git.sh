#!/bin/bash

# A simple script to automate the git add, commit, and push process.
#
# Usage:
# ./git_automation.sh "Your commit message here"
#
# This will:
# 1. Add all new and modified files to the staging area.
# 2. Commit the changes with the message you provide.
# 3. Push the changes to the 'maruf' branch on the 'origin' remote.

# --- Script Start ---

# Check if a commit message was provided as an argument.
# $# is a special variable in bash that holds the number of arguments passed to the script.
if [ $# -eq 0 ]; then
    # If no arguments are provided (count is 0), print an error and exit.
    echo "Error: No commit message provided."
    echo "Usage: $0 \"Your commit message\""
    exit 1
fi

# 1. Add all changes to the staging area.
# The '.' character means all files and directories in the current path.
echo "Running 'git add .'..."
git add .
echo "✅ Files staged."
echo ""

# 2. Commit the staged changes.
# The first argument passed to the script ($1) is used as the commit message.
# It's enclosed in quotes to handle messages with spaces.
echo "Running 'git commit -m \"$1\"'..."
git commit -m "$1"
echo "✅ Changes committed."
echo ""

# 3. Push the changes to the 'maruf' branch on the 'origin' remote.
echo "Running 'git push -u origin maruf'..."
git push -u origin master
echo "✅ Changes pushed to origin/master."
echo ""


