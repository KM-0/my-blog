export default function Home() {
  return (
    <div className="mt-14 flex w-full flex-col justify-start md:mt-20 md:px-8 xl:w-10/12">
      <h2 className="mb-4 animate-track-in-animation text-2xl font-bold md:text-4xl">
        About.
      </h2>
      <div className="flex flex-col gap-y-6 mx-2">
        <div>
          <h3 className="mb-2 animate-track-in-animation text-xl font-bold md:text-3xl">
            Me
          </h3>
          <ul className="animate-track-in-animation-item list-disc mx-8 flex flex-col gap-y-2">
            <li>
              名前
              <br />
              前田 啓太
            </li>
            <li>
              生年月日
              <br />
              1996/7/15
            </li>
            <li>
              出身地
              <br />
              神戸
            </li>
            <li>
              GitHub
              <br />
              @KM-0
            </li>
            <li>
              X
              <br />
              @keimae_dev
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 animate-track-in-animation text-xl font-bold md:text-3xl">
            Hobby
          </h3>
          <ul className="animate-track-in-animation-item list-disc mx-8 flex flex-col gap-y-2">
            <li>漫画</li>
            <li>映画鑑賞</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 animate-track-in-animation text-xl font-bold md:text-3xl">
            Skill
          </h3>
          <ul className="animate-track-in-animation-item list-disc mx-8 flex flex-col gap-y-2">
            <li>React</li>
            <li>TypeScript</li>
            <li>Java</li>
            <li>JSP</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
