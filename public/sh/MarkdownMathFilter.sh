#!/usr/bin/sh

for file in /home/dieter/projects/ELEKTROTECHNIK/elektro_linux/copilot/*.md; do 
	MarkdownMathFilter.pl "$file" 
done
