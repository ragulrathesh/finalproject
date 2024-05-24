import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>User Input Web Page</h1>
      <p>Enter a number to print:</p>
      <input type="nuber" id="num1" placeholder="Number1"></input>
      <button id="printbtn">Print</button>
      <h3>You entered:<output id="enterednumber"></output></h3>
    </main>
  );
}
