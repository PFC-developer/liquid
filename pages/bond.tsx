import Head from "next/head";
import BondForm from "modules/steak/BondForm";
import {SteakProps} from "./_app";
import {useCWClient} from "@wizard-ui/react";
import {Text} from "@chakra-ui/react";

export default function BondPage({network, chain}: SteakProps) {
    const client = useCWClient();
    if (!network || !client) {
        return <Text bg="white">Error. No network</Text>;
    }
    return (
        <>
            <Head>
                <title>Steak | Bond</title>
            </Head>
            {network.chain == "juno-1" && (
            <p>Bonding is suspended</p>
            )}

            {network.chain != "juno-1" && (
                <BondForm chain={chain} network={network} client={client}/>
            )}
        </>
    );
};

