import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none h-full items-end justify-center">
      <Image
        src="/assets/mohamed-el-ghazoui.jpeg"
        alt="Portrait de Mohamed EL-GHAZOUI"
        width={1200}
        height={1600}
        priority
        className="translate-z-0 h-[85%] w-auto object-contain rounded-t-[40%] opacity-90 [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
      />
    </div>
  );
};

export default Avatar;
