function Brands (){
    return(
        <div className=" flex justify-center gap-10 items-center mt-10 pb-24">
            <BrandImage src="/google.png" alt={'google logo'} />
            <BrandImage src="/slack.png" alt="slack logo" />
            <BrandImage src="/atlassian.png" alt="atlassian logo" />
            <BrandImage src="/dropbox.png" alt="dropbox logo" />
            <BrandImage src="/shopify.png" alt="shopify logo" />
        </div>
    )
}
export default Brands;
function BrandImage({ src, alt }) {
    return (
       <img width={100} src={src} alt={alt} />
    );
}