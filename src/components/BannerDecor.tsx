// Props component
type BannerDecorProps = {
    decorImg: string;
};

// main function
export function BannerDecor ({ decorImg }: BannerDecorProps) {
    return (
        //Bkg strip 
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Backgrund img style */}
            <div className="absolute inset-0 overflow-hidden z-0"
                style={{
                    backgroundImage: `url(${decorImg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "non-repeat",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Bkg overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via backgroung/80 to-background"></div>
            </div>
        </section>

    );

}
