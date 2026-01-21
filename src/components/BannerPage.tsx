import { motion } from "framer-motion"; //react library for animations
import { ChevronDown} from "lucide-react"; // react icons library

// Component Props -> Dados que vai receber minha fx
type BannerPageProps = {
    title: string;
    backgroundImg: string;
};

export function BannerPage ({ title, backgroundImg }: BannerPageProps) {
    return (
        // Background strip section
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background image style*/}
            <div className="absolute inset-0 overflow-hidden z-0"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed", // parallel effect
                }}
            >
                {/* Background overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background"></div>  
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.6}}
                className="relative z-10 text-center max-w-3xl mx-auto"
            >
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    {title}
                </h1>
            </motion.div>

            {/* Arrow Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-muted-foreground"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </motion.div>
        </section>

    );

}