import { Puff } from "react-loader-spinner";

function Loading() {
  return (
    <section className="flex justify-center items-center">
      <Puff color="#00BFFF" height={550} width={80} />
    </section>
  );
}

export default Loading;
