import React, {useEffect, useMemo, useState} from "react";
import {AppProps} from "next/app";
import {ChakraProvider, CSSReset} from "@chakra-ui/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {CosmostationWalletAdapter, KeplrWalletAdapter} from "@wizard-ui/core";
import {CWClientProvider, WalletModalProvider, WalletProvider} from "@wizard-ui/react";
import "d3-format";
import {Layout} from "modules/common";
import theme from "../theme";
import {chain_details, chainDetails, chains} from "modules/constants";
import {CosmWasmClient} from "@cosmjs/cosmwasm-stargate";
import {GasPrice} from "@cosmjs/stargate";
import {NextPageContext} from "next";

const queryClient = new QueryClient();

export interface SteakProps {
    network: chain_details;
    chain: string;
    client: CosmWasmClient | null;
}

interface HostProps extends AppProps {
    host: string,
    defaultChain: string,
}

const MyApp = ({Component, pageProps, host, defaultChain}: HostProps) => {
    let hostname = host;
    let chainname = defaultChain
    if (typeof localStorage != 'undefined') {
        console.log('localstorage')
        if (host == "no host") {
            hostname = localStorage.getItem("host") || "no host"
            chainname = localStorage.getItem("chain") || defaultChain
        } else {
            localStorage.setItem("host",hostname)
            localStorage.setItem("chain",chainname)
        }
    }
    console.log("host/chain", hostname, chainname,defaultChain);
    // You can also provide a custom RPC endpoint

    const [chain, setChain] = useState<string>(chainname);
    const [network, setNetwork] = useState<chain_details>(chainDetails(chainname));
    GasPrice;


    useEffect(() => {
        if (chain) {
            setNetwork(chainDetails(chain));
        } else {
            setNetwork(chainDetails(chainname));
        }
    }, [chain, chainname,hostname]);


    // console.log("network=",network);
    const endpoint = useMemo(() => {
        //  console.log("in endpoint", chain);
        return chains[chain].rpc;
    }, [chain]);

    const chainId = useMemo(() => network.chain, [chain, network]);
   // console.log("chain=",chain,chainname,chainId);
    const wallets = useMemo(
        () => {
            return [new KeplrWalletAdapter({
                endpoint,
                chainId,
                options: {
                    gasPrice: GasPrice.fromString("0.015uosmo"),
                },
            }), new CosmostationWalletAdapter({
                endpoint,
                chainId,
                chainName: "osmosis testnet",
                options: {
                    gasPrice: GasPrice.fromString("0.015uosmo"),
                },
            }),];
        },
        [endpoint, chainId, chain]
    );

    // const client =useCWClient()


    return (
        <ChakraProvider theme={theme}>
            <CWClientProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} chainId={chainId}>
                    <WalletModalProvider>
                        <QueryClientProvider client={queryClient}>
                            <CSSReset/>
                            <Layout network={network} chain={chain} setChain={setChain} chainId={chainId}
                                    client={null}>
                                <Component {...pageProps} network={network} chain={chain} client={null}/>

                            </Layout>


                        </QueryClientProvider>
                    </WalletModalProvider>
                </WalletProvider>
            </CWClientProvider>
        </ChakraProvider>
    );
};

MyApp.getInitialProps = async ({ctx}: { ctx: NextPageContext; }) => {
    const DEFAULTCHAIN = process.env.NEXT_PUBLIC_DEFAULT_CHAIN || "XXX";
    if (ctx.req) {
        const host = ctx.req.headers.host // will give you localhost:3000
        if (host) {
            if (typeof localStorage != 'undefined') {
                localStorage.setItem("host", host)
            }
            console.log('host=', host);
            if (host.includes("vercel") || host.includes("localhost")) {
                if (typeof localStorage != 'undefined') {
                    localStorage.setItem("chain", DEFAULTCHAIN)
                }
                return {host, defaultChain: DEFAULTCHAIN};
            }
            const dotPosn = host.indexOf(".");
            if (dotPosn >= 0) {
                const chain = host.substring(0, dotPosn);
                if (typeof localStorage != 'undefined') {
                    localStorage.setItem("chain", chain)
                }
                return {host: host, defaultChain: chain};
            }
            if (typeof localStorage != 'undefined') {
                localStorage.setItem("chain", DEFAULTCHAIN)
            }
            return {host: host, defaultChain: DEFAULTCHAIN};
        } else {
            console.log('no host header', ctx.req)
        }
    } else {
        console.log('no ctx.req', ctx)
    }
    if (typeof localStorage != 'undefined') {
        console.log('localstorage')
        const host = localStorage.getItem("host") || "no host"
        const chain = localStorage.getItem("chain") || DEFAULTCHAIN
        return {host: host, defaultChain: chain};
    } else {
        console.log('no localstorage')
        return {host:"no host", defaultChain:DEFAULTCHAIN}
    }
}
export default MyApp;
