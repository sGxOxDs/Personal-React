import { useEffect } from "react";

export const GoogleAdsense = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9227037038053454";
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);

        // 初始化廣告（確保window.adsbygoogle可用）
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    }, []);
    return (
        <ins className="adsbygoogle"
            style={{ display: "block",height:"90px" }}
            data-ad-client="ca-pub-9227037038053454"
            data-ad-slot="6683355662"
            data-full-width-responsive="true">
        </ins>
    );
}