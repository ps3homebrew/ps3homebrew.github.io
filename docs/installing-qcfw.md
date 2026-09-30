# Installing qCFW

## First of all

Before proceeding, you want to follow this guides:

* [Installing Hybrid FirmWare](installing-hfw)
* [Installing PS3HEN](installing-hen)

And you want to have: 
* Any sort of Internet connection.
* Any sort of USB external storage, preferrably a small flash drive.
* A compatible RP-2040 (Raspberry Pi Pico; RP-2040)
* Soldering equipment (tin, soldering iron, flux)
* 0.1 mm wire

## Preparing Stagex

The USB drive needs to be in the FAT32 MBR format. You can check that using the PS3 itself by simply connecting it, and checking if it appears in the Video, Music or Pictures section.
In case it's not, you will need to connect this drive to a PC. Once plugged, you can use a tool like Rufus to format the drive correctly.

### PC side

Download the latest qCFW release from here: <https://github.com/aomsin2526/BadWDSD/releases/latest>

Then extract the .zip and put the "qcfw" folder in the root of the USB.

### PS3 side

Insert the USB in the right-most port of the console.

You'll need to run the exploit by pressing on Enable HEN. 

After that, go to Hybrid Firmware Tools, go to qCFW Tools and press X on "Install Stagex". 
It should succeed but if it doesn't, reinstall Hybrid Firmware and HEN and try again.

## Installing the RP-2040

You'll need to first [disassemble the console](disassembly)