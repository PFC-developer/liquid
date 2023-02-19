/*
  export const DENOM = "ujunox";
  export const RPC = "https://rpc.uni.junonetwork.io";
  export const CHAIN = "uni-3";
  export const STEAK = "juno1w675s76fn0wt6yumh87akuedxp4h3lyf3vkcwxr256g30555zc4spl30gp";
  export const HUB = "juno1plaat9jusdhrtfltcxjam2e0m2ens3wgvlrg0seq07fq34hy908q754vj7";

export const DENOM = "uluna";
export const RPC = "https://terra-rpc.stakely.io";
export const CHAIN = "phoenix-1";
export const STEAK = "terra1xumzh893lfa7ak5qvpwmnle5m5xp47t3suwwa9s0ydqa8d8s5faqn6x7al";
export const HUB = "terra12e4v50xl33fnwkzltz9vu565snlmx65vdrk8e2644km09myewr8q538psc";

 */
export interface validator_credit {
    name: string;
    logo: string;
    delegate_url: string;
}

export interface chain_details {
    denom: string;
    rpc: string;
    api: string;
    chain: string;
    multiquery: string;
    multicall: string;
    steak: string;
    hub: string;
    name: string;
    tx_explorer: string;
    contract_explorer: string;
    validator_explorer: string;
    gas_price: string;
    validators: validator_credit[]
    steak_url?: string;
}

interface supported_chains {
    [key: string]: chain_details;
}

export const chains: supported_chains = {
    "terra2": {
        denom: "uluna",
        rpc: "https://terra2-rpc.dalnim.finance",
        api: "https://phoenix-lcd.terra.dev/",
        chain: "phoenix-1",
        name: "Luna 2.0",
        steak: "terra1xumzh893lfa7ak5qvpwmnle5m5xp47t3suwwa9s0ydqa8d8s5faqn6x7al",
        multiquery: "terra1m277jus3ahphsy6wml8kdwrz2ecf7wy4ggncz6d9xmhd2a29qyss3zakjl",
        multicall: "terra1m277jus3ahphsy6wml8kdwrz2ecf7wy4ggncz6d9xmhd2a29qyss3zakjl",
        hub: "terra12e4v50xl33fnwkzltz9vu565snlmx65vdrk8e2644km09myewr8q538psc",
        tx_explorer: "https://finder.terra.money/mainnet/tx/",
        contract_explorer: "https://finder.terra.money/mainnet/address/",
        validator_explorer: "https://ping.pub/terra2/staking/",
        gas_price: "0.02uluna",
        validators: [],
        steak_url: "https://liquidsteaking.app/",
    },
    "juno": {
        denom: "ujuno",
        rpc: "https://juno-rpc.dalnim.finance",
        //rpc: "https://juno-rpc.polkachu.com",
        api: "https://juno-api.dalnim.finance/",
        //api: "https://juno-api.polkachu.com/",
        chain: "juno-1",
        name: "Juno",
        steak: "juno173c59crjqeec28cpzs7n0y7hm4cd308zda8z6j4cnl6pct3stenseg2dxp",
        multiquery: "juno1q49nd5wyecxc64hmuqr3ax3get0pt337frwjqg0lxx5lagv3vfgsa5quh0",
        multicall: "juno1l7vrwvhvfea0wd2ch4qs9u0vrqr0pynxddft70kw0dgjuj0tzvys73hnuc",
        hub: "juno1r48wqcm3kmgw4xn40luxhwku9jwx8er4u3na2ap2y003acghwpusrf5zde",
        tx_explorer: "https://mintscan.io/juno/txs/",
        validator_explorer: "https://ping.pub/juno/staking/",
        contract_explorer: "https://mintscan.io/juno/account/",
        gas_price: "0.04ujuno",
        validators: [{
            name: "Obi",
            logo: "obi",
            delegate_url: "https://restake.app/juno/junovaloper14ts0j42qkpr43a3tgxr7zz6l6zdf7hdethuxxd"
        },

        ]
    },
    "juno-testnet": {
        denom: "ujunox",
        rpc: "https://rpc.uni.junonetwork.io",
        api: "https://api.uni.junonetwork.io/",
        chain: "uni-3",
        name: "Juno Testnet",
        steak: "juno1w675s76fn0wt6yumh87akuedxp4h3lyf3vkcwxr256g30555zc4spl30gp",
        multiquery: "juno1q49nd5wyecxc64hmuqr3ax3get0pt337frwjqg0lxx5lagv3vfgsa5quh0",
        multicall: "juno1l7vrwvhvfea0wd2ch4qs9u0vrqr0pynxddft70kw0dgjuj0tzvys73hnuc",
        hub: "juno1plaat9jusdhrtfltcxjam2e0m2ens3wgvlrg0seq07fq34hy908q754vj7",
        tx_explorer: "https://testnet.mintscan.io/juno-testnet/txs/",
        validator_explorer: "https://testnet.ping.pub/juno/staking/",
        contract_explorer: "https://testnet.mintscan.io/juno-testnet/account/",
        gas_price: "0.04ujuno",
        validators: [{
            name: "Obi",
            logo: "obi",
            delegate_url: "https://restake.app/juno/junovaloper14ts0j42qkpr43a3tgxr7zz6l6zdf7hdethuxxd"
        },

        ]
    },
    "sei-testnet": {
        denom: "usei",
        rpc: "https://sei-rpc.dalnim.finance",
        api: "https://sei-api.dalnim.finance/",
        chain: "atlantic-1",
        name: "SEI Atlantic Testnet",
        steak: "sei1ufs3tlq4umljk0qfe8k5ya0x6hpavn897u2cnf9k0en9jr7qarqqfx6a4a",
        multiquery: "juno1q49nd5wyecxc64hmuqr3ax3get0pt337frwjqg0lxx5lagv3vfgsa5quh0",
        multicall: "juno1l7vrwvhvfea0wd2ch4qs9u0vrqr0pynxddft70kw0dgjuj0tzvys73hnuc",
        hub: "sei1wkwy0xh89ksdgj9hr347dyd2dw7zesmtrue6kfzyml4vdtz6e5ws7zulsv",
        tx_explorer: "https://sei.explorers.guru/transaction/",
        validator_explorer: "https://sei.explorers.guru/validator/",
        contract_explorer: "https://sei.explorers.guru/account/",
        gas_price: "0.04usei",
        validators: [{
            name: "Obi",
            logo: "obi",
            delegate_url: "https://sei.explorers.guru/validator/seivaloper1hgateul87eemqyvcjszlkdxm8welsf5v07cukp"
        },
            {
                name: "PFC",
                logo: "pfc",
                delegate_url: "https://sei.explorers.guru/validator/seivaloper1w48csxj6xrhs99wz4uhys6ukdkegcn8haq9xpw"
            }
        ]
    },
    "stars-testnet": {
        denom: "ustars",
        rpc: "https://rpc.elgafar-1.stargaze-apis.com:443",
        api: "https://rest.elgafar-1.stargaze-apis.com/",
        chain: "elgafar-1",
        name: "STARZ Testnet",
        steak: "stars15wdut776euk6qx6qxujxcg83xj3mp7zwlkysvr44hmhnvay63scq9ufvgq",
        multiquery: "juno1q49nd5wyecxc64hmuqr3ax3get0pt337frwjqg0lxx5lagv3vfgsa5quh0",
        multicall: "juno1l7vrwvhvfea0wd2ch4qs9u0vrqr0pynxddft70kw0dgjuj0tzvys73hnuc",
        hub: "stars1v4eyxvg8ykrp8p2a55pszjsc7get67pw63vvaku6nrgpdwnwy6uqadvsxh",
        tx_explorer: "https://testnet-explorer.publicawesome.dev/stargaze/tx/",
        validator_explorer: "https://testnet-explorer.publicawesome.dev/stargaze/staking/",
        contract_explorer: "https://testnet-explorer.publicawesome.dev/stargaze/account/",
        gas_price: "0.04usei",
        validators: [{
            name: "Obi",
            logo: "obi",
            delegate_url: "https://wallet.keplr.app/chains/osmosis?modal=validator&chain=osmosis-1&validator_address=osmovaloper14ts0j42qkpr43a3tgxr7zz6l6zdf7hdes5jpma"
        },
            {
                name: "PFC",
                logo: "pfc",
                delegate_url: "https://wallet.keplr.app/chains/stride?modal=validator&chain=stride-1&validator_address=stridevaloper1670dvuv348eynr9lsmdrhqu3g7vpmzx92tuvq6"
            }
        ]
    },
    "whitewhale-testnet": {
        denom: "uwhale",
        rpc: "https://narwhal-rpc.dalnim.finance:443",
        api: "https://narwhal-api.dalnim.finance/",
        chain: "narwhal-1",
        name: "WHALE Testnet",
        steak: "migaloo179e90rqspswfzmhdl25tg22he0fcefwndgzc957ncx9dleduu7ms4acnxg",
        multiquery: "juno1q49nd5wyecxc64hmuqr3ax3get0pt337frwjqg0lxx5lagv3vfgsa5quh0",
        multicall: "juno1l7vrwvhvfea0wd2ch4qs9u0vrqr0pynxddft70kw0dgjuj0tzvys73hnuc",
        hub: "migaloo1k8pms0ywhsa0kjvkxqx434atqd5dh6w54k0gr8j45ra36q02py5s78wcwe",
        tx_explorer: "https://testnet-explorer.publicawesome.dev/stargaze/tx/",
        validator_explorer: "https://testnet-explorer.publicawesome.dev/stargaze/staking/",
        contract_explorer: "https://testnet-explorer.publicawesome.dev/stargaze/account/",
        gas_price: "0.04usei",
        validators: [
            {
                name: "PFC",
                logo: "pfc",
                delegate_url: "https://cosmosrun.info/whitewhale/staking/migaloovaloper1670dvuv348eynr9lsmdrhqu3g7vpmzx94s460k"
            }
        ]
    },
    "whitewhale": {
        denom: "uwhale",
        rpc: "https://migaloo-rpc.dalnim.finance:443",
        api: "https://migaloo-api.dalnim.finance/",
        chain: "migaloo-1",
        name: "White Whale",
        steak: "migaloo17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgsqfhjvq",
        multiquery: "juno1q49nd5wyecxc64hmuqr3ax3get0pt337frwjqg0lxx5lagv3vfgsa5quh0",
        multicall: "juno1l7vrwvhvfea0wd2ch4qs9u0vrqr0pynxddft70kw0dgjuj0tzvys73hnuc",
        hub: "migaloo1wkwy0xh89ksdgj9hr347dyd2dw7zesmtrue6kfzyml4vdtz6e5wsaqt5j4",
        tx_explorer: "https://cosmosrun.info/whitewhale/tx/",
        validator_explorer: "https://cosmosrun.info/whitewhale/staking/",
        contract_explorer: "https://cosmosrun.info/whitewhale/account/",
        gas_price: "0.04usei",
        validators: [
            {
                name: "PFC",
                logo: "pfc",
                delegate_url: "https://cosmosrun.info/whitewhale/staking/migaloovaloper1670dvuv348eynr9lsmdrhqu3g7vpmzx94s460k"
            }
        ]
    }
};

export function chainDetails(network: string): chain_details {
    if (chains[network]) {
        return chains[network];
    }

    throw new Error(`Unsupported network: ${network}`);
}
