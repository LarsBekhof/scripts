# Some helpful scripts
Only the scripts which are actually maybe useful and work are described here.

You likely want to add this repository to your PATH for easy usage.

## backlightctl
Controls the screen birghtness for when xbacklight doesn't work.

### Usage
- `backlightctl`: Opens dmenu to select a brightness
- `backlightctl up <percentage>`: Increases the brightness by a certain percentage
- `backlightctl down <percentage>`: Decreases the brightness by a certain percentage
- `backlightctl <percentage>`: Sets the brightness to a certain percentage

### Prerequisites
- Your user needs access to the location of the backlight brightness file. This file is likely located at `/sys/class/backlight/intel_backlight/brightness`. You can add the following line to your root users crontab `@reboot chown <user>:<user> /sys/class/backlight/intel_backlight/brightness`


## esl
For when you want the use eslint from your project root.

### Usage
- `esl`

### Prerequisites
- Have eslint installed somewhere where you want to use this script.


## git-acp
Just git add, commit and push all at the same time!

### Usage
- `git-acp`

### Prerequisites
- Have git installed.

## localip
Prints your PC's local ip.

### Usage
- `localip`


## mandf
Opens man files in PDF format.

### Usage
- `mandf <program>`

### Prerequisites
- Have xdg-open installed


## mine
Makes things yours. Files and directories that is. This doesn't work with icecream, sorry.

### Usage
- `mine <file>`: This is your file now.
- `mine -R <directory>`: This directory is yours now.


## od
Search for a directory and open it.

### Usage
- `od`: This opens fzf. Search for a directory and press enter.

### Prerequisites
- Have fzf installed.


## of
Search for a file and open it with vim. You could change vim to xdg-open so you can open all kinds of file types.

### Usage
- `of`: This opens fzf. Search for a file and press enter.

### Prerequisites
- Have fzf installed.
- Have vim installed.


## record-audio
Records audio

### Usage
- `record-audio`

### Prerequisites
- Have ffmpeg installed.
- Have a directory at ~/Music/audio-recordings


## screenshot
Makes a screenshot

### Usage
- `screenshot`: Select one of the following modes: fullscreen, focused window or select area.

### Prerequisites
- Have dmenu installed
- Have scrot installed
- Have a directory at ~/Pictures/Screenshots

## sxv
Opens a directory or image with sxiv

### Usage
- `sxv <directory>`: Opens all images in the directory
- `sxv <file>`: Opens image


## wifi
Add, connect to or remove wifi connections

### Usage
- `wifi`: Select add, connect or remove to perform on of the actions

### Prerequisites
- Have NetworkManager installed
- Have dmenu installed

## switch-audio-sink
Switch audio devices without hazzle

### Prerequisites
- Have pactl installed
- Have dmenu installed
- Have ag installed (ag could be replaced with grep)
