export default function Contact({ }) {

    return (

        <section id="contact" className="scroll-mt-12 p-8 px-5">
        <h2 className="text-center text-2xl font-semibold pb-4">聯絡我們</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
    
          <div className="rounded-lg shadow-lg overflow-hidden w-full max-w-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1539656308517!2d120.47263331552022!3d23.55588928468221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e769189b23b87%3A0xfad46dcfeab09ce7!2z5ZyL5YyX5biC5Lit5paH5b636aOf6Zmi5YyW5pW55Zmi!5e0!3m2!1szh-TW!2stw!4v1677839338774!5m2!1szh-TW!2stw"
              width="100%" height="350" allowFullScreen="" loading="lazy"
              className="w-full h-72 md:h-96 border-0">
            </iframe>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">專線：</h3>
              <p>(05) 2729381</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email：</h3>
              <p>admyunchi@ccu.edu.tw</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">地址：</h3>
              <p>國立中正大學管理學院</p>
            </div>

            <div className="flex space-x-4">
              <a href="FB連結" target="_blank" rel="noopener noreferrer">
                <img src="/images/fb.jpg" alt="Facebook" className="w-8 h-8 hover:opacity-80" />
              </a>
              <a href="IG連結" target="_blank" rel="noopener noreferrer">
                <img src="/images/ig.jpg" alt="Instagram" className="w-8 h-8 hover:opacity-80" />
              </a>
            </div>
          </div>

        </div>
      </section>
        
    );
}