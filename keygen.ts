import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./dev-wallet.json";

//Generate a keypair from wallet file
const kp = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection to devnet SOL tokens
const connection = new Connection("https://api.devnet.solana.com");
(async () => {
  try {
    const txhash = await connection.requestAirdrop(
      kp.publicKey,
      2 * LAMPORTS_PER_SOL
    );
    console.log(
      `Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`
    );
  } catch (err) {
    console.error(`Oops, something went wrong: ${err}`);
  }
})();
