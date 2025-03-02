import Link from "next/link";
import { Work_Sans as MainFont } from "next/font/google";

const mainFont = MainFont({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={`grid pl-4 grid-cols-[16rem_auto] ${mainFont.className}`}>
      <h1 className="p-4 pt-8">
        <ruby>
          Jaeho <rp>(</rp>
          <rt>재호</rt>
          <rp>)</rp> <br />
        </ruby>
        <ruby>
          Lee<rp>(</rp>
          <rt>이</rt>
          <rp>)</rp>
        </ruby>
        <br />
        <br />
        software engineer,
        <br />
        frontend
      </h1>

      <menu className="p-4 pt-8">
        <section>
          <Link href="/">home</Link>
        </section>
        <br />
        <section>
          <a href="https://velog.io/@jaeholee/posts/">posts</a>{" "}
          <span className="italic text-xs">(will be moved here later)</span>
        </section>
        <br />

        <section>
          <a href="https://github.com/sairion/">github</a> /{" "}
          <a href="https://www.linkedin.com/in/jaeholee/">linkedin</a>
        </section>
        <section>
          <a href="https://cv.jaeholee.com/">cv</a> /{" "}
          <span className="cursor-not-allowed text-gray-500">portfolio</span>
        </section>
      </menu>
    </main>
  );
}
