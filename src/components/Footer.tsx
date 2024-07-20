function Footer() {
  return (
    <>
      <div></div>
      <div className="bg-primary p-6">
        <div className="flex items-center justify-between text-primary-foreground mx-8">
          <div className="">
            Created by Vignesh Esakkiappan
          </div>
          <div className="flex space-x-4 items-center justify-between">
            <a href="" className="hover:text-primary-foreground/80" target="_blank">Github</a>
            <a href="" className="hover:text-primary-foreground/80" target="_blank">LinkedIn</a>
            <a href="" className="hover:text-primary-foreground/80" target="_blank">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
