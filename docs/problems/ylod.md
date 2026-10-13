# YLOD (Yellow Light Of Death)

This is probably the most famous and common issue a PS3 can suffer. It usually indicates a critical hardware problem (or overheating).

The most common causes for this issue are the [NEC/TOKINS capacitors](..\components/nec-tokins) or/and the [RSX](..\components/rsx) GPU. 
However, it isn't recommended trying to guess what the problem is, and instead solder a UART to USB adapter to the console, and connect it to a computer.
This way we can retrieve the SYSCON Error Log and check what the issue actually is. You can check the codes here: https://www.psdevwiki.com/ps3/Syscon_Error_Codes

::: tip

Go back to [Best PS3](best-ps3)

:::