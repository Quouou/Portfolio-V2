export default function Footer() {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-end items-center flex-wrap gap-5">
      <div className="flex gap-3 ">
        <div className="social-icon">
          <a href="https://github.com/Quouou" target="_blank">
            <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/christopher-benedicto-a481b32a4/"
            target="_blank"
          >
            <img
              src="/assets/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png-2636396724.png"
              alt="linkedin"
              className="w-6 h-6 "
            />
          </a>
        </div>
      </div>
    </section>
  );
}
