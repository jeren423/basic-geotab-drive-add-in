import React from "react";
import { Banner } from "@geotab/zenith";

export const Tab1Content = () => {
    return <>
        <Banner type="warning" size="XL" icon={true}>Warning: This is a test to see if this can appear in GDrive app</Banner>
        <div className="zda-app__sections">
            <section className="zda-section">
                <h3 className="zda-section__header heading-02-mobile-drive">Latest Requests</h3>
                <p className="zda-section__content body-02-short-mobile-drive">
                    Send to House <br />
                    Type: Double A <br />
                    Exprected Drops: 6 <br />
                    Load Weight: 14,800 kg<br />
                </p>
                <p className="zda-section__content body-02-short-mobile-drive">Section content</p>
            </section>
        </div>
    </>;
};