# Installing PS3HEN

## First of all

Before proceeding, you want to make sure you have:
* Any sort of USB external storage, preferrably a small flash drive.
* Any sort of Internet connection.
* A working BluRay daughterboard.
* A working Bluetooth/WiFi daughterboard.

In most cases, you just gotta check if they're working or not by testing a controller via Bluetooth, a physical game and trying to load a compatible http website such as Brewology via WiFi.

If those three work fine, then you can proceed. Otherwise, you will likely get stuck on an [update loop](update-loop) and proceeding isn't recommended before performing a hardware fix or getting another console.

However, you can check the [model differences](model-differences) if you're not sure, as some models have the daughterboard integrated into the main motherboard and technically not need those capabilities fully working.
For example, it is possible to install this in a Super Slim without the BluRay drive connected.

The drive needs to be in the FAT32 MBR format. You can check that using the PS3 itself by simply connecting it, and checking if it appears in the Video, Music or Pictures section.
In case it's not, you will need to connect this drive to a PC. Once plugged, you can use a tool like Rufus to format the drive correctly.

## Installing Hybrid Firmware

Hybrid Firmware (HFW) is a combination of Sony's new original firmware with an old exploitable webkit (browser). We need to install this as the HEN exploit won't work on the newest webkit.

To install this, you can do so like you would do for any update.

### PC side

You will need to download the [latest HFW file](https://www.ps3xploit.me/firmware/hfw/HFW_4.93.1_PS3UPDAT.PUP) from a PC, and once downloaded rename the file to be just "PS3UPDAT.PUP".

Then in your drive make a folder called "PS3", and inside that "PS3" folder create a folder called "UPDATE".

After that you can copy the "PS3UPDAT.PUP" file to the "UPDATE" (PS3\UPDATE) folder of your drive. The full path should now be: "PS3\UPDATE\PS3UPDAT.PUP"

Once that's done, eject and unplug the drive from your PC.

### PS3 side

Connect your drive to the right-most port of your PS3, and then go to Settings -> System Update -> Update via Storage Media.
After that, you can accept the terms and proceed with the installation.

## Setting up the browser

Once HFW has been successfully installed and you're back on the XMB, go to the Web Browser from the Network tab. Press Triangle to show the Browser menu. From there you will go to 