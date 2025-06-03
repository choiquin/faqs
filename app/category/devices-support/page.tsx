export default function HardwareAndPeripheralsFAQ() {
  const faqs = [
  {
    question: "My PC won't turn on. What should I do?",
    answer:
      "Ensure the power cable is securely plugged in. Check if the power outlet is working. If there's still no power, try a different power supply or consult IT support.",
  },
  {
    question: "How do I connect my laptop to a projector or big screen during a conference?",
    answer:
      "Use an HDMI or VGA cable depending on the available ports. Press `Windows + P` and select 'Duplicate' or 'Extend' display. For Mac, go to System Preferences > Displays > Arrangement.",
  },
  {
    question: "My printer is not responding. How can I troubleshoot it?",
    answer:
      "Check if the printer is powered on and properly connected via USB or network. Ensure the correct printer is selected. Try restarting both the printer and your computer. If it's a network printer, confirm it's online.",
  },
  {
    question: "Laptop battery drains too fast — what can I do?",
    answer:
      "Reduce screen brightness, close unnecessary background apps, and switch to battery saver mode. Consider replacing the battery if it's over 2 years old or no longer holding charge.",
  },
  {
    question: "How do I add a new printer to my computer?",
    answer:
      "Go to 'Settings' > 'Devices' > 'Printers & scanners', then click 'Add a printer or scanner'. Ensure the printer is powered on and connected to the same network.",
  },
  {
    question: "My monitor shows 'No Signal' — what does that mean?",
    answer:
      "Check if the cable (HDMI/DisplayPort/VGA) is securely connected to both the PC and the monitor. Ensure the monitor is set to the correct input source. Try a different cable if needed.",
  },
  {
    question: "Can I use my laptop with the lid closed and an external monitor?",
    answer:
      "Yes. Go to 'Control Panel' > 'Power Options' > 'Choose what closing the lid does', and set it to 'Do nothing' when plugged in. Then, connect your external monitor and keyboard/mouse.",
  },
  {
    question: "My keyboard or mouse is not working. What should I check?",
    answer:
      "For wired devices, check the USB connection. For wireless, replace batteries or check Bluetooth pairing. Try connecting them to another port or system to isolate the issue.",
  },
  {
    question: "How do I enable dual monitors?",
    answer:
      "Connect the second monitor, right-click the desktop, and choose 'Display Settings'. Click 'Detect' if it doesn't appear automatically, and configure the display arrangement (extend or duplicate).",
  },
  {
    question: "My laptop is overheating. How can I fix it?",
    answer:
      "Ensure vents are not blocked, use it on a hard surface, and consider using a cooling pad. Clean the fans if possible. Close resource-intensive apps and monitor CPU usage.",
  },
];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-red-700">Hardware and Peripherals FAQs</h1>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <h2 className="text-lg font-semibold text-gray-900">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
