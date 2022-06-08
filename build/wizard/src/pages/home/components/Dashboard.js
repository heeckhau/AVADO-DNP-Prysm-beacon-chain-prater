import React from "react";

import BeaconChainInfo from "./BeaconChainInfo";

const Comp = () => {

    const header = () => {
        return (
            <section className="is-medium has-text-white">
                <div className="columns is-mobile">
                    <div className="column is-8-desktop is-10">
                        <h1 className="title is-1 is-spaced has-text-white">ETH2.0 Beacon chain monitor</h1>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            {header()}

            <BeaconChainInfo />
        </>
    )
};

export default Comp;