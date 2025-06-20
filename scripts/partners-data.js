// Complete partner data for all 24 companies
const partnersData = {
    "up-network": {
        id: "up-network",
        name: "Up Network",
        slug: "up-network",
        tagline: "Building the world's largest decentralized mobile network",
        description: "Up Network is revolutionizing mobile connectivity through Web3-native infrastructure. Their flagship product, Up Mobile, is an AI-powered smartphone that seamlessly integrates blockchain technology into everyday mobile experiences.",
        extendedDescription: "As a Nexio ecosystem partner, Up Network brings decentralized mobile infrastructure to the Movement ecosystem, enabling users to participate in the Web3 economy directly from their mobile devices with enhanced privacy and control.",
        category: "Infrastructure",
        status: "Live",
        website: "https://upnetwork.xyz",
        documentation: "https://docs.upnetwork.xyz",
        twitter: "@upnetwork",
        discord: "https://discord.gg/upnetwork",
        keyFeatures: [
            "Decentralized mobile network infrastructure",
            "AI-powered Web3 smartphone (Up Mobile)",
            "Privacy-focused mobile connectivity",
            "Blockchain integration at hardware level",
            "Earn rewards for network participation"
        ],
        prerequisites: [
            "Up Mobile device or compatible smartphone",
            "UP tokens for network participation",
            "Basic understanding of DeFi concepts",
            "Mobile wallet setup"
        ],
        howToUse: [
            { step: 1, title: "Get Up Mobile", description: "Purchase an Up Mobile device or download the Up Network app on your compatible smartphone." },
            { step: 2, title: "Create Account", description: "Set up your Up Network account and connect your Web3 wallet for rewards and payments." },
            { step: 3, title: "Join Network", description: "Activate your device on the decentralized network and start earning rewards for participation." },
            { step: 4, title: "Share Connectivity", description: "Enable network sharing to earn UP tokens by providing connectivity to other users." },
            { step: 5, title: "Access Web3", description: "Use built-in Web3 features to interact with dApps, DeFi protocols, and blockchain services." }
        ],
        tips: [
            "Keep your device connected to maximize earning potential",
            "Join high-demand areas for better rewards",
            "Use the AI assistant for Web3 navigation",
            "Participate in network governance with UP tokens"
        ],
        metrics: {
            networkNodes: "10,000+",
            activeUsers: "50,000+",
            coverage: "Major cities worldwide",
            monthlyRewards: "$500-2000 average"
        },
        securityStatus: {
            audited: true,
            auditors: ["CertiK"],
            riskLevel: "Low",
            riskDescription: "Established infrastructure provider with hardware-level security and multiple audits."
        },
        faq: [
            {
                question: "Do I need special hardware?",
                answer: "While Up Mobile devices offer the best experience, you can participate using the Up Network app on compatible Android devices."
            },
            {
                question: "How do I earn rewards?",
                answer: "You earn UP tokens by sharing network connectivity, validating network transactions, and participating in governance."
            }
        ],
        logo: { text: "U", backgroundColor: "#fc5c21" }
    },
    "lync": {
        id: "lync",
        name: "LYNC",
        slug: "lync",
        tagline: "GameFi infrastructure for the next generation of blockchain games",
        description: "LYNC provides comprehensive GameFi infrastructure that enables developers to easily launch and scale blockchain games. With native SDKs for Unity and Unreal Engine, LYNC makes Web3 gaming accessible to traditional game developers.",
        extendedDescription: "As a key Nexio partner, LYNC brings AAA gaming capabilities to the Movement ecosystem, offering developers the tools they need to create immersive blockchain gaming experiences with true digital asset ownership.",
        category: "Infrastructure",
        status: "Live",
        website: "https://lync.world",
        documentation: "https://docs.lync.world",
        twitter: "@lyncworld",
        discord: "https://discord.gg/lync",
        keyFeatures: [
            "Unity & Unreal Engine SDKs for Web3 integration",
            "Mobile-first Layer 2 gaming chain",
            "Built-in NFT marketplace and trading",
            "Cross-game asset interoperability",
            "Gasless transactions for players",
            "Game publishing and distribution platform"
        ],
        prerequisites: [
            "Unity 2021.3+ or Unreal Engine 5+",
            "Basic game development knowledge",
            "LYNC tokens for deployment",
            "Web3 wallet (MetaMask or similar)"
        ],
        howToUse: [
            { step: 1, title: "Install SDK", description: "Download and install the LYNC SDK for your game engine (Unity or Unreal) from the developer portal." },
            { step: 2, title: "Initialize Project", description: "Create a new LYNC project and configure your game settings, including blockchain network and gas policies." },
            { step: 3, title: "Integrate Features", description: "Add Web3 features like wallet connection, NFT minting, and marketplace integration using SDK components." },
            { step: 4, title: "Test on Testnet", description: "Deploy your game to LYNC testnet and test all blockchain features with test tokens." },
            { step: 5, title: "Launch Game", description: "Submit for review and launch your game on LYNC mainnet with full marketing support." }
        ],
        tips: [
            "Use LYNC's template projects to get started quickly",
            "Implement progressive Web3 onboarding for traditional gamers",
            "Leverage cross-game NFTs for increased player retention",
            "Join developer workshops for best practices"
        ],
        metrics: {
            totalGames: "150+",
            monthlyActiveUsers: "2M+",
            totalTransactions: "50M+",
            avgTPS: "10,000"
        },
        securityStatus: {
            audited: true,
            auditors: ["Halborn", "Quantstamp"],
            riskLevel: "Low",
            riskDescription: "Mature gaming infrastructure with multiple security audits and battle-tested in production games."
        },
        faq: [
            {
                question: "Can I port existing games to LYNC?",
                answer: "Yes, the SDK is designed for easy integration into existing Unity and Unreal projects with minimal code changes."
            },
            {
                question: "How much does it cost to launch a game?",
                answer: "LYNC offers various tiers starting from free for indie developers to enterprise plans with dedicated support."
            }
        ],
        logo: { text: "L", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }
    },
    "mosaic": {
        id: "mosaic",
        name: "Mosaic",
        slug: "mosaic",
        tagline: "The premier DEX aggregator for the Movement ecosystem",
        description: "Mosaic is a cutting-edge DEX aggregator that finds the best trading routes across all decentralized exchanges on Movement. It optimizes trades for the best prices, lowest slippage, and minimal gas costs.",
        extendedDescription: "Built specifically for the Movement ecosystem, Mosaic aggregates liquidity from multiple DEXs to ensure traders always get the best execution. Its smart routing algorithm considers gas costs, slippage, and price impact across all available liquidity sources.",
        category: "DeFi",
        status: "Live",
        website: "https://mosaic.fi",
        documentation: "https://docs.mosaic.fi",
        twitter: "@mosaicfi",
        discord: "https://discord.gg/mosaic",
        keyFeatures: [
            "Multi-DEX aggregation on Movement",
            "Smart routing for optimal prices",
            "Gas cost optimization",
            "MEV protection built-in",
            "One-click cross-DEX arbitrage",
            "Real-time liquidity monitoring"
        ],
        prerequisites: [
            "Movement-compatible wallet",
            "MOVE tokens for gas fees",
            "Tokens to trade",
            "Basic understanding of DEX trading"
        ],
        howToUse: [
            { step: 1, title: "Connect Wallet", description: "Visit mosaic.fi and connect your Movement-compatible wallet (MetaMask, Petra, etc.)" },
            { step: 2, title: "Select Tokens", description: "Choose the tokens you want to swap from and to using the intuitive interface." },
            { step: 3, title: "Review Routes", description: "Mosaic will show you the best route across multiple DEXs with estimated output and gas costs." },
            { step: 4, title: "Approve & Swap", description: "Approve the token spend (first time only) and execute the swap with one click." },
            { step: 5, title: "Track Transaction", description: "Monitor your transaction in real-time and receive tokens in your wallet." }
        ],
        tips: [
            "Use limit orders for better prices on large trades",
            "Enable MEV protection for sensitive transactions",
            "Check multiple routes for complex token pairs",
            "Set slippage tolerance based on market volatility"
        ],
        metrics: {
            dailyVolume: "$5M+",
            totalUsers: "25,000+",
            avgSavings: "2.3%",
            supportedTokens: "500+"
        },
        securityStatus: {
            audited: true,
            auditors: ["Trail of Bits"],
            riskLevel: "Low",
            riskDescription: "Smart contract risk only. No custody of user funds. All swaps are atomic."
        },
        faq: [
            {
                question: "How does Mosaic find the best price?",
                answer: "Mosaic queries all major DEXs on Movement in real-time and calculates the optimal path considering price, gas, and slippage."
            },
            {
                question: "Are there any fees?",
                answer: "Mosaic charges a small 0.1% fee on trades, which is often offset by the better prices found through aggregation."
            }
        ],
        logo: { text: "M", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }
    },
    "lunch": {
        id: "lunch",
        name: "Lunch",
        slug: "lunch",
        tagline: "AI-powered DeFi automation for effortless yield farming",
        description: "Lunch is the leading DeFAI platform that uses autonomous AI agents to manage your DeFi positions. It automatically farms yields, rebalances portfolios, and optimizes strategies across multiple protocols.",
        extendedDescription: "By combining artificial intelligence with DeFi, Lunch removes the complexity of yield farming. Users simply deposit funds and let AI agents handle the rest, from finding the best yields to managing risk and compounding returns.",
        category: "DeFi",
        status: "Live",
        website: "https://lunchlunch.xyz",
        documentation: "https://docs.lunchlunch.xyz",
        twitter: "@lunchprotocol",
        discord: "https://discord.gg/lunch",
        keyFeatures: [
            "Autonomous AI agents for yield farming",
            "Multi-protocol strategy optimization",
            "Automatic compounding and rebalancing",
            "Risk management and loss prevention",
            "Gas optimization through batching",
            "Real-time strategy adaptation"
        ],
        prerequisites: [
            "Movement or Ethereum wallet",
            "Stablecoins or major tokens to deposit",
            "Basic understanding of yield farming",
            "$100 minimum deposit recommended"
        ],
        howToUse: [
            { step: 1, title: "Connect & Deposit", description: "Connect your wallet to Lunch and deposit your tokens into the AI-managed vault of your choice." },
            { step: 2, title: "Choose Strategy", description: "Select from conservative, balanced, or aggressive strategies based on your risk tolerance." },
            { step: 3, title: "AI Takes Over", description: "AI agents automatically deploy your funds across multiple protocols to maximize yields." },
            { step: 4, title: "Monitor Performance", description: "Track your yields, strategy changes, and AI decisions through the intuitive dashboard." },
            { step: 5, title: "Withdraw Anytime", description: "Request withdrawals at any time. Funds are returned with accumulated yields minus fees." }
        ],
        tips: [
            "Start with stablecoins for lower risk",
            "Enable notifications for strategy changes",
            "Reinvest LUNCH rewards for compound growth",
            "Join the DAO to influence AI parameters"
        ],
        strategies: [
            {
                name: "Conservative Yield",
                apy: "8-12%",
                description: "Focus on stable pairs and established protocols with minimal IL risk."
            },
            {
                name: "Balanced Growth",
                apy: "15-25%",
                description: "Mix of stable and volatile assets with moderate risk exposure."
            },
            {
                name: "Aggressive Alpha",
                apy: "30%+",
                description: "High-risk strategies including new protocols and leveraged positions."
            }
        ],
        metrics: {
            tvl: "$45M",
            activeStrategies: "150+",
            avgAPY: "18.5%",
            totalUsers: "12,000+"
        },
        securityStatus: {
            audited: true,
            auditors: ["Quantstamp", "Hacken"],
            riskLevel: "Medium",
            riskDescription: "Smart contract risk plus DeFi protocol risks. AI strategies are backtested but past performance doesn't guarantee future results."
        },
        faq: [
            {
                question: "How does the AI make decisions?",
                answer: "The AI analyzes yields, gas costs, risk metrics, and market conditions across protocols to optimize allocation in real-time."
            },
            {
                question: "What are the fees?",
                answer: "Lunch charges 2% management fee and 20% performance fee on profits, similar to traditional hedge funds."
            }
        ],
        logo: { text: "L", backgroundColor: "#10b981" }
    },
    "movenow": {
        id: "movenow",
        name: "MoveNow",
        slug: "movenow",
        tagline: "The SocialFi hub for Movement ecosystem engagement",
        description: "MoveNow is a SocialFi platform that rewards users for social interactions and community building within the Movement ecosystem. Earn tokens by creating content, engaging with others, and growing the community.",
        extendedDescription: "Built exclusively for Movement, MoveNow transforms social engagement into earning opportunities. Users can monetize their influence, content creation, and community contributions while helping grow the Movement ecosystem.",
        category: "DeFi",
        status: "Testnet",
        website: "https://movenow.io",
        documentation: "https://docs.movenow.io",
        twitter: "@movenowio",
        discord: "https://discord.gg/movenow",
        keyFeatures: [
            "Earn tokens for social engagement",
            "Content monetization tools",
            "Community challenges and quests",
            "NFT profile customization",
            "Influence scoring system",
            "DAO governance participation"
        ],
        prerequisites: [
            "Movement wallet",
            "Twitter/Discord account",
            "Active in crypto communities",
            "Basic social media skills"
        ],
        howToUse: [
            { step: 1, title: "Create Profile", description: "Connect your wallet and social accounts to create your MoveNow profile with customizable NFT avatar." },
            { step: 2, title: "Complete Quests", description: "Participate in daily quests like sharing content, engaging with posts, and inviting friends." },
            { step: 3, title: "Create Content", description: "Share insights, tutorials, or memes about Movement ecosystem to earn creator rewards." },
            { step: 4, title: "Build Influence", description: "Grow your follower base and engagement metrics to increase your earning multiplier." },
            { step: 5, title: "Claim Rewards", description: "Harvest your earned MOVE tokens daily and stake them for additional benefits." }
        ],
        tips: [
            "Consistency is key - daily engagement maximizes rewards",
            "Quality content earns more than spam",
            "Collaborate with other creators for bonus rewards",
            "Participate in governance for extra tokens"
        ],
        metrics: {
            testnetUsers: "5,000+",
            dailyPosts: "1,000+",
            avgEarnings: "$50/month",
            topEarner: "$2,000/month"
        },
        securityStatus: {
            audited: false,
            auditors: ["Pending"],
            riskLevel: "Medium",
            riskDescription: "Testnet phase. Smart contracts pending audit. Start with small amounts."
        },
        faq: [
            {
                question: "How much can I earn?",
                answer: "Earnings vary based on engagement and influence, ranging from $10-500+ per month for active users."
            },
            {
                question: "What counts as engagement?",
                answer: "Likes, comments, shares, original posts, and successful referrals all contribute to your earnings."
            }
        ],
        logo: { text: "M", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" }
    },
    "route-x": {
        id: "route-x",
        name: "Route-X",
        slug: "route-x",
        tagline: "Lightning-fast cross-chain bridge for the Movement ecosystem",
        description: "Route-X is a next-generation cross-chain bridge that enables seamless asset transfers between Movement and other major blockchains. With sub-minute transfers and military-grade security, it's the fastest bridge in the ecosystem.",
        extendedDescription: "Using innovative liquidity pools and optimistic validation, Route-X provides near-instant bridging while maintaining the highest security standards. It's the primary gateway for assets entering and leaving the Movement ecosystem.",
        category: "Infrastructure",
        status: "Live",
        website: "https://routex.io",
        documentation: "https://docs.routex.io",
        twitter: "@routexbridge",
        discord: "https://discord.gg/routex",
        keyFeatures: [
            "Sub-minute cross-chain transfers",
            "Support for 15+ major blockchains",
            "Optimistic validation for speed",
            "Built-in liquidity pools",
            "MEV-resistant design",
            "Emergency pause mechanism"
        ],
        prerequisites: [
            "Wallets on source and destination chains",
            "Tokens to bridge",
            "Gas tokens on both chains",
            "Understanding of bridge risks"
        ],
        howToUse: [
            { step: 1, title: "Connect Wallets", description: "Connect wallets for both source and destination chains. Route-X supports MetaMask, WalletConnect, and more." },
            { step: 2, title: "Select Route", description: "Choose source chain, destination chain, and token amount. Route-X shows fees and estimated time." },
            { step: 3, title: "Initiate Transfer", description: "Approve token spend and initiate the bridge transaction. You'll receive a tracking ID." },
            { step: 4, title: "Wait for Confirmation", description: "Most transfers complete in 30-60 seconds. Track progress in real-time on the dashboard." },
            { step: 5, title: "Claim Tokens", description: "Tokens arrive automatically on Movement. For other chains, you may need to claim manually." }
        ],
        tips: [
            "Bridge during off-peak hours for lower fees",
            "Keep some native tokens on destination chain",
            "Use the fee estimator before large transfers",
            "Enable notifications for transfer updates"
        ],
        metrics: {
            totalVolume: "$1.2B+",
            dailyVolume: "$15M",
            totalTransfers: "500,000+",
            avgTime: "45 seconds"
        },
        securityStatus: {
            audited: true,
            auditors: ["OpenZeppelin", "Trail of Bits"],
            riskLevel: "Low",
            riskDescription: "Battle-tested bridge with $1B+ transferred. Uses industry best practices and has bug bounty program."
        },
        faq: [
            {
                question: "What happens if a transfer fails?",
                answer: "Failed transfers are automatically refunded to the source address within 24 hours, minus gas fees."
            },
            {
                question: "Are there transfer limits?",
                answer: "Yes, limits vary by token and chain, typically $10k for first-time users, increasing with usage history."
            }
        ],
        logo: { text: "R", backgroundColor: "#6366f1" }
    },
    "rndm-io": {
        id: "rndm-io",
        name: "RNDM.IO",
        slug: "rndm-io",
        tagline: "Premium blockchain gaming content and analytics platform",
        description: "RNDM.IO is a comprehensive content platform specializing in blockchain gaming, NFT analytics, and GameFi insights. Since 2016, they've been the go-to source for quality analysis and industry reports.",
        extendedDescription: "As a Nexio ecosystem partner, RNDM.IO provides crucial market intelligence and educational content for GameFi projects, helping developers and players navigate the evolving blockchain gaming landscape.",
        category: "Tools",
        status: "Live",
        website: "https://rndm.io",
        documentation: null,
        twitter: "@RNDM_IO",
        discord: null,
        keyFeatures: [
            "In-depth GameFi project analysis",
            "NFT collection analytics and trends",
            "Weekly industry reports",
            "Game economy consulting",
            "Educational content library",
            "Community-driven insights"
        ],
        prerequisites: [
            "Interest in blockchain gaming",
            "Basic understanding of NFTs",
            "RNDM token for premium features (optional)"
        ],
        howToUse: [
            { step: 1, title: "Visit Platform", description: "Access RNDM.IO and browse free content including game reviews, market analysis, and educational articles." },
            { step: 2, title: "Create Account", description: "Sign up for a free account to save favorites, receive newsletters, and participate in discussions." },
            { step: 3, title: "Explore Analytics", description: "Use the analytics dashboard to track GameFi projects, NFT collections, and market trends." },
            { step: 4, title: "Access Premium", description: "Stake RNDM tokens or subscribe for premium reports, early insights, and consulting services." },
            { step: 5, title: "Contribute Content", description: "Submit your own analysis and earn RNDM tokens for quality contributions approved by the community." }
        ],
        tips: [
            "Follow their Twitter for daily GameFi alpha",
            "Read weekly reports for market trends",
            "Use analytics before investing in gaming projects",
            "Join Telegram for real-time discussions"
        ],
        metrics: {
            monthlyReaders: "250,000+",
            gamesAnalyzed: "1,500+",
            reports: "500+ published",
            established: "Since 2016"
        },
        securityStatus: {
            audited: false,
            auditors: ["N/A"],
            riskLevel: "Low",
            riskDescription: "Content platform with no smart contract risk. Optional token features for premium access."
        },
        faq: [
            {
                question: "Is the content free?",
                answer: "Basic content and analytics are free. Premium reports and consulting services require RNDM tokens or subscription."
            },
            {
                question: "How accurate are the analytics?",
                answer: "Data is aggregated from multiple on-chain sources and updated in real-time with 99.9% accuracy."
            }
        ],
        logo: { text: "R", gradient: "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)" }
    },
    "moonmovers": {
        id: "moonmovers",
        name: "MoonMovers",
        slug: "moonmovers",
        tagline: "The ultimate P2E meme game on Movement",
        description: "MoonMovers is a play-to-earn meme game where players compete to send their favorite meme coins 'to the moon'. Combining addictive gameplay with DeFi mechanics, it's both entertaining and profitable.",
        extendedDescription: "Built on Movement for lightning-fast gameplay, MoonMovers lets players stake meme tokens, participate in launch competitions, and earn rewards through skill-based mini-games and community events.",
        category: "Gaming",
        status: "Beta",
        website: "https://moonmovers.xyz",
        documentation: "https://docs.moonmovers.xyz",
        twitter: "@MoonMoverz",
        discord: "https://discord.gg/moonmovers",
        keyFeatures: [
            "Meme coin launch competitions",
            "Skill-based mini-games",
            "NFT rocket customization",
            "Daily tournaments with prizes",
            "Staking for passive income",
            "Community-driven game modes"
        ],
        prerequisites: [
            "Movement wallet",
            "MOON tokens to play",
            "Basic gaming skills",
            "Sense of humor"
        ],
        howToUse: [
            { step: 1, title: "Get MOON Tokens", description: "Purchase MOON tokens on supported DEXs or earn them through community activities." },
            { step: 2, title: "Choose Your Meme", description: "Select your favorite meme coin to support in launch competitions." },
            { step: 3, title: "Play Mini-Games", description: "Compete in various skill games to earn boosts for your chosen meme coin." },
            { step: 4, title: "Win Rewards", description: "If your meme coin reaches the moon first, share in the prize pool with other supporters." },
            { step: 5, title: "Customize & Flex", description: "Use winnings to buy NFT rockets and accessories to show off your moon missions." }
        ],
        tips: [
            "Join a guild for team competitions",
            "Play during happy hours for 2x rewards",
            "Study meme coin trends for better picks",
            "Complete daily quests for free MOON tokens"
        ],
        metrics: {
            dailyPlayers: "10,000+",
            prizePools: "$50,000 weekly",
            gamesPlayed: "1M+",
            topEarning: "$5,000/month"
        },
        securityStatus: {
            audited: false,
            auditors: ["Pending"],
            riskLevel: "Medium",
            riskDescription: "Beta phase game. Smart contracts pending audit. Play with amounts you can afford to lose."
        },
        faq: [
            {
                question: "Is it really profitable?",
                answer: "Skilled players can earn $50-200 daily, but earnings depend on gameplay skill and market conditions."
            },
            {
                question: "Do I need to be good at games?",
                answer: "Basic gaming skills help, but the mini-games are designed to be accessible to all skill levels."
            }
        ],
        logo: { text: "M", backgroundColor: "#fbbf24" }
    },
    "helix": {
        id: "helix",
        name: "Helix",
        slug: "helix",
        tagline: "Multi-chain restaking protocol for maximized yields",
        description: "Helix is a revolutionary restaking protocol that allows users to secure multiple blockchain networks simultaneously while earning compounded rewards from all chains.",
        extendedDescription: "By leveraging cross-chain technology and liquid staking derivatives, Helix enables users to maximize their staking yields across ecosystems without sacrificing liquidity or security.",
        category: "DeFi",
        status: "Live",
        website: "https://helix.finance",
        documentation: "https://docs.helix.finance",
        twitter: "@helixprotocol",
        discord: "https://discord.gg/helix",
        keyFeatures: [
            "Multi-chain simultaneous staking",
            "Liquid staking derivatives (hTokens)",
            "Auto-compounding rewards",
            "Cross-chain yield optimization",
            "Slash insurance options",
            "Governance participation across chains"
        ],
        prerequisites: [
            "Tokens to stake (ETH, MOVE, SOL, etc.)",
            "Understanding of staking risks",
            "Multi-chain wallet setup",
            "Minimum stake amounts vary by chain"
        ],
        howToUse: [
            { step: 1, title: "Connect Multi-Chain Wallet", description: "Connect wallets for each chain you want to stake on. Helix supports all major wallets." },
            { step: 2, title: "Select Staking Strategy", description: "Choose from conservative, balanced, or aggressive multi-chain staking strategies." },
            { step: 3, title: "Deposit Assets", description: "Deposit your tokens and receive liquid hTokens representing your staked position." },
            { step: 4, title: "Earn & Compound", description: "Watch your rewards accumulate from multiple chains. Enable auto-compounding for maximum yields." },
            { step: 5, title: "Use hTokens in DeFi", description: "Use your liquid hTokens in other DeFi protocols while continuing to earn staking rewards." }
        ],
        tips: [
            "Diversify across chains to minimize risk",
            "Use hTokens as collateral for additional yield",
            "Monitor validator performance regularly",
            "Consider slash insurance for large positions"
        ],
        strategies: [
            {
                name: "Stable Staking",
                apy: "8-12%",
                description: "Focus on established chains with proven validators"
            },
            {
                name: "Growth Staking",
                apy: "15-25%",
                description: "Mix of established and emerging chains"
            },
            {
                name: "Degen Staking",
                apy: "30%+",
                description: "High-risk, high-reward new chain staking"
            }
        ],
        metrics: {
            tvl: "$150M",
            totalStakers: "25,000+",
            avgAPY: "18.5%",
            chainsSupported: "15"
        },
        securityStatus: {
            audited: true,
            auditors: ["CertiK", "Quantstamp"],
            riskLevel: "Medium",
            riskDescription: "Staking carries slashing risks. Helix mitigates but cannot eliminate validator risk."
        },
        faq: [
            {
                question: "What are hTokens?",
                answer: "hTokens are liquid representations of your staked assets that can be used in DeFi while earning staking rewards."
            },
            {
                question: "Can I unstake immediately?",
                answer: "Yes, by swapping hTokens on DEXs. Direct unstaking follows each chain's unbonding period."
            }
        ],
        logo: { text: "H", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }
    },
    "warpgate": {
        id: "warpgate",
        name: "Warpgate",
        slug: "warpgate",
        tagline: "Movement's native bridge for instant cross-chain transfers",
        description: "Warpgate is Movement's official bridge protocol, providing secure and near-instant asset transfers between Movement and other major blockchains with best-in-class UX.",
        extendedDescription: "Built specifically for Movement's high-performance architecture, Warpgate uses optimistic rollup technology and liquidity pools to achieve sub-second finality for most transfers.",
        category: "Infrastructure",
        status: "Live",
        website: "https://warpgate.pro",
        documentation: "https://docs.warpgate.pro",
        twitter: "@warpgatebridge",
        discord: "https://discord.gg/warpgate",
        keyFeatures: [
            "Sub-second transfers to Movement",
            "Native Movement integration",
            "Liquidity pool model for instant transfers",
            "Support for all major tokens",
            "Built-in fraud proofs",
            "Canonical bridge for Movement"
        ],
        prerequisites: [
            "Movement wallet",
            "Source chain wallet",
            "Tokens to bridge",
            "Gas on both chains"
        ],
        howToUse: [
            { step: 1, title: "Access Warpgate", description: "Visit warpgate.pro and connect your source chain wallet (MetaMask, etc.)" },
            { step: 2, title: "Select Transfer", description: "Choose source chain, token, and amount. Warpgate shows instant quotes with fees." },
            { step: 3, title: "Approve & Send", description: "Approve token spend and initiate transfer. Most complete in under 30 seconds." },
            { step: 4, title: "Receive on Movement", description: "Tokens arrive automatically in your Movement wallet. No claiming needed." }
        ],
        tips: [
            "Use Warpgate for official Movement assets",
            "Check liquidity before large transfers",
            "Join the relayer network for rewards",
            "Enable fast mode for urgent transfers"
        ],
        metrics: {
            totalBridged: "$500M+",
            dailyVolume: "$20M",
            avgTime: "22 seconds",
            successRate: "99.9%"
        },
        securityStatus: {
            audited: true,
            auditors: ["OpenZeppelin", "Halborn"],
            riskLevel: "Low",
            riskDescription: "Official Movement bridge with multiple audits and $50M bug bounty program."
        },
        faq: [
            {
                question: "Why is Warpgate faster than other bridges?",
                answer: "Warpgate uses Movement's native fast finality and pre-funded liquidity pools for instant transfers."
            },
            {
                question: "Is it the official bridge?",
                answer: "Yes, Warpgate is Movement's canonical bridge, directly integrated with the protocol."
            }
        ],
        logo: { text: "W", backgroundColor: "#8b5cf6" }
    },
    "fluswap": {
        id: "fluswap",
        name: "FluSwap",
        slug: "fluswap",
        tagline: "Movement's premier AMM DEX with concentrated liquidity",
        description: "FluSwap is Movement's leading automated market maker featuring concentrated liquidity, allowing LPs to earn more fees with less capital while traders enjoy minimal slippage.",
        extendedDescription: "Built on Movement's high-performance infrastructure, FluSwap combines Uniswap V3's concentrated liquidity with additional features like limit orders, auto-routing, and built-in yield farming.",
        category: "DeFi",
        status: "Live",
        website: "https://fluswap.xyz",
        documentation: "https://docs.fluswap.xyz",
        twitter: "@fluswap",
        discord: "https://discord.gg/fluswap",
        keyFeatures: [
            "Concentrated liquidity positions",
            "Range orders and limit orders",
            "Auto-compound LP fees",
            "Built-in yield farming",
            "Multi-hop smart routing",
            "Impermanent loss protection"
        ],
        prerequisites: [
            "Movement wallet",
            "MOVE for gas fees",
            "Tokens to trade or provide liquidity",
            "Basic understanding of AMMs"
        ],
        howToUse: [
            { step: 1, title: "Connect Wallet", description: "Visit fluswap.xyz and connect your Movement-compatible wallet." },
            { step: 2, title: "Swap Tokens", description: "Select tokens to swap, enter amount, and review the exchange rate and fees." },
            { step: 3, title: "Provide Liquidity", description: "Choose a pool and price range for concentrated liquidity positions." },
            { step: 4, title: "Manage Positions", description: "Monitor your positions, collect fees, and adjust ranges as needed." },
            { step: 5, title: "Farm Rewards", description: "Stake LP tokens in farms to earn additional FLU rewards." }
        ],
        tips: [
            "Narrow ranges earn more fees but require active management",
            "Use range orders to DCA into positions",
            "Enable auto-compound for passive income",
            "Monitor IL protection eligibility"
        ],
        strategies: [
            {
                name: "Stable Pairs",
                apy: "20-40%",
                description: "Provide liquidity to stablecoin pairs with tight ranges"
            },
            {
                name: "Blue Chip Pairs",
                apy: "30-60%",
                description: "ETH/MOVE, BTC/MOVE with medium ranges"
            },
            {
                name: "Degen Farms",
                apy: "100%+",
                description: "New token pairs with wide ranges and high rewards"
            }
        ],
        metrics: {
            tvl: "$125M",
            volume24h: "$45M",
            totalPairs: "250+",
            uniqueLPs: "15,000+"
        },
        securityStatus: {
            audited: true,
            auditors: ["Code4rena", "Sherlock"],
            riskLevel: "Low",
            riskDescription: "Battle-tested AMM design with Movement-specific optimizations. IL risks exist for LPs."
        },
        faq: [
            {
                question: "What is concentrated liquidity?",
                answer: "LPs can provide liquidity within specific price ranges, earning more fees with less capital compared to traditional AMMs."
            },
            {
                question: "How does IL protection work?",
                answer: "Long-term LPs (30+ days) receive FLU tokens to offset impermanent loss if they maintain positions."
            }
        ],
        logo: { text: "F", gradient: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)" }
    },
    "move-fun": {
        id: "move-fun",
        name: "Move Fun",
        slug: "move-fun",
        tagline: "The premier meme coin launchpad on Movement",
        description: "Move Fun is Movement's dedicated meme token launchpad where anyone can create, launch, and trade meme coins with built-in liquidity, anti-rug mechanisms, and community features.",
        extendedDescription: "Inspired by pump.fun but built for Movement's high-speed infrastructure, Move Fun makes meme coin creation accessible while protecting traders with forced liquidity locks and fair launch mechanics.",
        category: "DeFi",
        status: "Live",
        website: "https://movefun.meme",
        documentation: null,
        twitter: "@movefun",
        discord: "https://discord.gg/movefun",
        keyFeatures: [
            "One-click meme coin creation",
            "Automatic liquidity provision",
            "Built-in rug protection",
            "Fair launch mechanics",
            "Community voting system",
            "Integrated social features"
        ],
        prerequisites: [
            "Movement wallet",
            "MOVE for gas and liquidity",
            "Meme idea and community",
            "Basic marketing skills"
        ],
        howToUse: [
            { step: 1, title: "Create Your Meme", description: "Design your token name, symbol, and upload meme artwork. Set initial parameters." },
            { step: 2, title: "Launch Fair", description: "Deploy with automatic liquidity lock. No presales or team allocations allowed." },
            { step: 3, title: "Build Community", description: "Use integrated social tools to grow your meme community and drive engagement." },
            { step: 4, title: "Trade & Earn", description: "Trade memes, earn from transaction fees, and participate in community events." }
        ],
        tips: [
            "Launch during high-activity periods",
            "Prepare marketing before launch",
            "Engage with other meme communities",
            "Use the bonding curve wisely"
        ],
        metrics: {
            totalLaunches: "500+",
            successfulMoons: "50+",
            dailyVolume: "$2M+",
            topGainer: "10,000x"
        },
        securityStatus: {
            audited: true,
            auditors: ["Zellic"],
            riskLevel: "Medium",
            riskDescription: "Meme coins are highly volatile. Platform is secure but tokens can still lose value."
        },
        faq: [
            {
                question: "Can creators rug pull?",
                answer: "No. Liquidity is automatically locked for 6 months minimum and creators can't mint more tokens."
            },
            {
                question: "What makes a meme moon?",
                answer: "Strong community, good memes, active marketing, and a bit of luck. No guarantees in meme land!"
            }
        ],
        logo: { text: "M", backgroundColor: "#ec4899" }
    },
    "movewiffriends": {
        id: "movewiffriends",
        name: "MoveWifFriends",
        slug: "movewiffriends",
        tagline: "SocialFi platform where friendships earn rewards",
        description: "MoveWifFriends is a SocialFi platform that gamifies social interactions on Movement. Users earn tokens for making friends, creating content, and building communities.",
        extendedDescription: "Combining elements of friend.tech with Movement's speed, MoveWifFriends creates a sustainable social economy where genuine connections and quality content are rewarded.",
        category: "DeFi",
        status: "Beta",
        website: "https://movewiffriends.com",
        documentation: "https://docs.movewiffriends.com",
        twitter: "@movewiffrens",
        discord: "https://discord.gg/mwf",
        keyFeatures: [
            "Tokenized social connections",
            "Content monetization",
            "Friend keys trading",
            "Community treasuries",
            "Social mining rewards",
            "Reputation NFTs"
        ],
        prerequisites: [
            "Movement wallet",
            "Twitter account",
            "Active social presence",
            "0.1 MOVE to start"
        ],
        howToUse: [
            { step: 1, title: "Link Socials", description: "Connect your wallet and link Twitter to verify your identity and import connections." },
            { step: 2, title: "Buy Friend Keys", description: "Purchase keys of friends or influencers to access their exclusive content and chats." },
            { step: 3, title: "Create Content", description: "Share insights, alpha, or memes to attract key buyers and earn creator rewards." },
            { step: 4, title: "Build Network", description: "Grow your friend network and watch your key value increase with demand." },
            { step: 5, title: "Earn Rewards", description: "Claim daily rewards based on your activity, connections, and key trading volume." }
        ],
        tips: [
            "Quality over quantity for connections",
            "Share genuine alpha to attract buyers",
            "Hold keys of rising creators early",
            "Participate in community events"
        ],
        metrics: {
            totalUsers: "8,000+",
            keysTraded: "100,000+",
            topKeyPrice: "5 MOVE",
            dailyActive: "2,000+"
        },
        securityStatus: {
            audited: false,
            auditors: ["Pending"],
            riskLevel: "Medium",
            riskDescription: "Beta platform. Key prices volatile. Social tokens carry speculation risk."
        },
        faq: [
            {
                question: "How are key prices determined?",
                answer: "Prices follow a bonding curve - they increase with each purchase and decrease with sales."
            },
            {
                question: "Can I sell keys anytime?",
                answer: "Yes, but selling incurs a 5% fee and may impact your reputation score."
            }
        ],
        logo: { text: "M", gradient: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)" }
    },
    "picwe": {
        id: "picwe",
        name: "Picwe",
        slug: "picwe",
        tagline: "Cross-chain liquidity infrastructure for seamless DeFi",
        description: "Picwe provides underlying liquidity infrastructure that enables seamless asset flows between different blockchain ecosystems, optimizing for capital efficiency and minimal slippage.",
        extendedDescription: "As critical infrastructure for Nexio, Picwe aggregates liquidity from multiple sources and chains, providing developers with simple APIs to access deep liquidity across the entire DeFi landscape.",
        category: "Infrastructure",
        status: "Live",
        website: "https://picwe.org",
        documentation: "https://docs.picwe.org",
        twitter: "@picweprotocol",
        discord: null,
        keyFeatures: [
            "Cross-chain liquidity aggregation",
            "Developer-friendly APIs",
            "MEV-resistant routing",
            "Just-in-time liquidity",
            "Universal liquidity pools",
            "Automated rebalancing"
        ],
        prerequisites: [
            "Developer account for API access",
            "Understanding of liquidity provision",
            "Multi-chain infrastructure",
            "Technical integration skills"
        ],
        howToUse: [
            { step: 1, title: "Get API Access", description: "Register for a developer account and receive API keys for liquidity access." },
            { step: 2, title: "Integrate SDK", description: "Install Picwe SDK in your dApp to access cross-chain liquidity functions." },
            { step: 3, title: "Configure Routes", description: "Set up preferred routes and chains for your specific liquidity needs." },
            { step: 4, title: "Access Liquidity", description: "Use simple API calls to source liquidity from multiple chains instantly." },
            { step: 5, title: "Monitor Performance", description: "Track liquidity metrics and optimize routing through the dashboard." }
        ],
        tips: [
            "Cache frequently used routes",
            "Implement fallback liquidity sources",
            "Monitor gas costs across chains",
            "Use webhooks for real-time updates"
        ],
        metrics: {
            monthlyVolume: "$500M+",
            connectedProtocols: "50+",
            apiCalls: "10M+ daily",
            uptime: "99.99%"
        },
        securityStatus: {
            audited: true,
            auditors: ["Trail of Bits", "Consensys"],
            riskLevel: "Low",
            riskDescription: "Infrastructure layer with no custody of funds. All routing is atomic and trustless."
        },
        faq: [
            {
                question: "How does Picwe source liquidity?",
                answer: "Picwe connects to major DEXs, lending protocols, and liquidity providers across chains, aggregating the best rates."
            },
            {
                question: "What are the fees?",
                answer: "Picwe charges 0.05% on routed volume, often offset by better execution prices."
            }
        ],
        logo: { text: "P", backgroundColor: "#0891b2" }
    },
    "movedrome": {
        id: "movedrome",
        name: "MoveDrome",
        slug: "movedrome",
        tagline: "ve(3,3) DEX bringing sustainable liquidity to Movement",
        description: "MoveDrome is Movement's native ve(3,3) DEX, combining Curve's vote-escrowed tokenomics with Solidly's innovations to create sustainable liquidity and fair token distribution.",
        extendedDescription: "Built from the ground up for Movement, MoveDrome aligns incentives between traders, liquidity providers, and token holders through its innovative gauge voting and bribe marketplace system.",
        category: "DeFi",
        status: "Live",
        website: "https://movedrome.com",
        documentation: "https://docs.movedrome.com",
        twitter: "@movedrome",
        discord: "https://discord.gg/movedrome",
        keyFeatures: [
            "ve(3,3) tokenomics model",
            "Gauge voting for emissions",
            "Bribe marketplace",
            "Stable and volatile pools",
            "Concentrated liquidity options",
            "Protocol owned liquidity"
        ],
        prerequisites: [
            "Movement wallet",
            "Understanding of ve(3,3) mechanics",
            "Tokens for liquidity or DROME for voting",
            "Long-term perspective for ve positions"
        ],
        howToUse: [
            { step: 1, title: "Provide Liquidity", description: "Add liquidity to stable or volatile pools to earn trading fees and DROME emissions." },
            { step: 2, title: "Lock DROME", description: "Lock DROME tokens for veDROME NFTs, with lock periods from 1 week to 4 years." },
            { step: 3, title: "Vote on Gauges", description: "Use veDROME voting power to direct emissions to your preferred liquidity pools." },
            { step: 4, title: "Earn Bribes", description: "Collect bribes from protocols incentivizing votes for their pools." },
            { step: 5, title: "Compound Rewards", description: "Claim fees, bribes, and rebases weekly. Relock for continued benefits." }
        ],
        tips: [
            "Longer locks receive more voting power",
            "Vote for pools you provide liquidity to",
            "Monitor bribe APRs for best returns",
            "Consider protocol partnerships for vetokens"
        ],
        strategies: [
            {
                name: "Liquidity Mining",
                apy: "50-150%",
                description: "Provide liquidity to high-emission pools"
            },
            {
                name: "Vote Maximizer",
                apy: "30-80%",
                description: "Lock DROME and optimize bribe collection"
            },
            {
                name: "Protocol Strategy",
                apy: "100%+",
                description: "Partner with protocols for veTokens and revenue share"
            }
        ],
        metrics: {
            tvl: "$85M",
            weeklyVolume: "$125M",
            veLockedPercent: "65%",
            avgLockTime: "2.3 years"
        },
        securityStatus: {
            audited: true,
            auditors: ["Zellic", "yAudit"],
            riskLevel: "Low",
            riskDescription: "Battle-tested ve(3,3) model. Smart contract risk exists but mitigated through audits."
        },
        faq: [
            {
                question: "What is ve(3,3)?",
                answer: "A tokenomics model where users lock tokens for voting power, direct emissions, and earn fees plus bribes."
            },
            {
                question: "Why lock for 4 years?",
                answer: "Maximum lock gives 1:1 voting power, highest rebases, and signals long-term alignment."
            }
        ],
        logo: { text: "M", gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" }
    },
    "mizu": {
        id: "mizu",
        name: "Mizu",
        slug: "mizu",
        tagline: "Unified liquidity layer for cross-VM DeFi",
        description: "Mizu is a revolutionary unified liquidity layer that enables seamless DeFi interactions across different virtual machines (EVM, MoveVM, SolanaVM) without bridges or wrapped assets.",
        extendedDescription: "Built on MoveVM with cross-VM execution capabilities, Mizu allows developers to access liquidity from any supported blockchain while users enjoy native asset trading without traditional bridging risks.",
        category: "Infrastructure",
        status: "Testnet",
        website: "https://mizulabs.xyz",
        documentation: "https://docs.mizulabs.xyz",
        twitter: "@mizulabs",
        discord: "https://discord.gg/mizu",
        keyFeatures: [
            "Cross-VM liquidity access",
            "No bridges or wrapped assets",
            "Native asset settlement",
            "Unified liquidity pools",
            "VM-agnostic development",
            "Atomic cross-VM swaps"
        ],
        prerequisites: [
            "Understanding of different VMs",
            "Multi-chain wallet setup",
            "Developer skills for integration",
            "Testnet tokens for testing"
        ],
        howToUse: [
            { step: 1, title: "Connect Multi-VM Wallet", description: "Use Mizu's universal wallet connector supporting EVM, Move, and Solana wallets." },
            { step: 2, title: "Select Assets", description: "Choose assets from any supported VM - they appear as native, not wrapped." },
            { step: 3, title: "Execute Cross-VM Swap", description: "Swap between assets on different VMs in a single atomic transaction." },
            { step: 4, title: "Receive Native Assets", description: "Receive assets directly on their native chain without any wrapping." }
        ],
        tips: [
            "Start with testnet to understand the flow",
            "Keep gas on all connected chains",
            "Use Mizu for arbitrage opportunities",
            "Monitor cross-VM pool incentives"
        ],
        metrics: {
            testnetTVL: "$5M",
            crossVMSwaps: "10,000+",
            uniqueUsers: "2,000+",
            supportedAssets: "50+"
        },
        securityStatus: {
            audited: false,
            auditors: ["Scheduled Q2 2024"],
            riskLevel: "High",
            riskDescription: "Testnet phase. Novel architecture undergoing security reviews. Use with caution."
        },
        faq: [
            {
                question: "How is this different from bridges?",
                answer: "Mizu doesn't lock and mint wrapped assets. It enables native cross-VM execution through cryptographic proofs."
            },
            {
                question: "Which chains are supported?",
                answer: "Currently Movement, Ethereum, BSC, Solana on testnet. More chains coming for mainnet."
            }
        ],
        logo: { text: "M", gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)" }
    },
    "binstep": {
        id: "binstep",
        name: "Binstep",
        slug: "binstep",
        tagline: "AI-powered Telegram trading bot for Movement tokens",
        description: "Binstep is a sophisticated Telegram trading bot that provides automated trading, real-time alerts, and portfolio management for Movement ecosystem tokens directly within Telegram.",
        extendedDescription: "With advanced AI algorithms and MEV protection, Binstep makes professional trading accessible to everyone through Telegram's familiar interface, supporting limit orders, DCA strategies, and copy trading.",
        category: "Tools",
        status: "Live",
        website: "https://bot.binstep.xyz",
        documentation: "https://docs.binstep.xyz",
        twitter: "@binstepbot",
        discord: null,
        keyFeatures: [
            "Telegram-native trading interface",
            "AI-powered trade signals",
            "Automated DCA strategies",
            "Copy trading functionality",
            "Real-time price alerts",
            "Anti-MEV protection"
        ],
        prerequisites: [
            "Telegram account",
            "Movement wallet",
            "Minimum 0.5 MOVE",
            "Basic trading knowledge"
        ],
        howToUse: [
            { step: 1, title: "Start Bot", description: "Message @BinstepBot on Telegram and click Start to initialize your account." },
            { step: 2, title: "Connect Wallet", description: "Generate a secure trading wallet or import existing using private key (encrypted)." },
            { step: 3, title: "Fund Account", description: "Deposit MOVE and tokens to your Binstep wallet address for trading." },
            { step: 4, title: "Set Strategy", description: "Configure trading preferences: manual, AI signals, DCA, or copy trading." },
            { step: 5, title: "Start Trading", description: "Execute trades with simple commands or let automation handle it." }
        ],
        tips: [
            "Start with small amounts to test",
            "Use stop-loss on all positions",
            "Follow top traders before copying",
            "Enable 2FA for security"
        ],
        strategies: [
            {
                name: "AI Signals",
                winRate: "68%",
                description: "Follow AI-generated buy/sell signals"
            },
            {
                name: "DCA Bot",
                returns: "Steady accumulation",
                description: "Automated dollar-cost averaging"
            },
            {
                name: "Copy Trading",
                variable: "Depends on trader",
                description: "Mirror successful traders automatically"
            }
        ],
        metrics: {
            activeUsers: "15,000+",
            dailyVolume: "$3M+",
            avgTradeSize: "$200",
            successRate: "68%"
        },
        securityStatus: {
            audited: true,
            auditors: ["CertiK"],
            riskLevel: "Medium",
            riskDescription: "Bot trading carries risks. Private keys are encrypted but stored on servers. Use dedicated trading wallets."
        },
        faq: [
            {
                question: "Are my private keys safe?",
                answer: "Keys are encrypted with military-grade encryption and stored securely. However, we recommend using a dedicated trading wallet."
            },
            {
                question: "What are the fees?",
                answer: "0.5% per trade for basic users, 0.3% for premium subscribers. No fees on failed transactions."
            }
        ],
        logo: { text: "B", backgroundColor: "#f59e0b" }
    },
    "ninesuns": {
        id: "ninesuns",
        name: "NineSuns",
        slug: "ninesuns",
        tagline: "Enterprise-grade security infrastructure for Movement",
        description: "NineSuns provides comprehensive security services including smart contract audits, real-time monitoring, and incident response for projects building on Movement and other blockchains.",
        extendedDescription: "With a team of seasoned security researchers and automated tools, NineSuns helps protocols identify vulnerabilities before they can be exploited, ensuring the safety of user funds.",
        category: "Infrastructure",
        status: "Live",
        website: "https://ninesuns.io",
        documentation: "https://docs.ninesuns.io",
        twitter: "@ninesunsec",
        discord: null,
        keyFeatures: [
            "Smart contract auditing",
            "Real-time threat monitoring",
            "Incident response team",
            "Security training programs",
            "Bug bounty management",
            "Formal verification services"
        ],
        prerequisites: [
            "Smart contract code to audit",
            "Development team contact",
            "Project documentation",
            "Budget for security services"
        ],
        howToUse: [
            { step: 1, title: "Request Audit", description: "Submit your project details and smart contract code for initial assessment." },
            { step: 2, title: "Scoping Call", description: "Discuss project requirements, timeline, and receive a detailed quote." },
            { step: 3, title: "Audit Process", description: "NineSuns team conducts thorough manual and automated security analysis." },
            { step: 4, title: "Receive Report", description: "Get detailed findings with severity ratings and remediation recommendations." },
            { step: 5, title: "Implement Fixes", description: "Address identified issues with NineSuns support and get re-audit confirmation." }
        ],
        tips: [
            "Audit early in development cycle",
            "Provide comprehensive documentation",
            "Implement monitoring post-launch",
            "Consider ongoing security retainers"
        ],
        metrics: {
            auditsCompleted: "200+",
            vulnerabilitiesFound: "1,500+",
            savedFromHacks: "$500M+",
            clientProjects: "150+"
        },
        securityStatus: {
            audited: true,
            auditors: ["Self-audited", "Peer reviewed"],
            riskLevel: "Low",
            riskDescription: "Established security firm with strong track record. No access to client funds."
        },
        faq: [
            {
                question: "How much does an audit cost?",
                answer: "Audit costs range from $10k-100k+ depending on complexity, codebase size, and timeline requirements."
            },
            {
                question: "What's included in monitoring?",
                answer: "24/7 transaction monitoring, anomaly detection, and immediate alerts for suspicious activities."
            }
        ],
        logo: { text: "N", gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" }
    },
    "joule-finance": {
        id: "joule-finance",
        name: "Joule Finance",
        slug: "joule-finance",
        tagline: "The liquidity hub of Aptos and Movement - Cross-chain DeFi",
        description: "Joule Finance is a comprehensive DeFi platform offering cross-chain bridging, lending markets, and leveraged yield farming. As the liquidity hub for Aptos and Movement, it enables advanced DeFi strategies.",
        extendedDescription: "Through LayerZero integration, Joule connects multiple ecosystems, allowing seamless asset transfers and participation in Move-based DeFi with up to 5x leverage on yield farming positions.",
        category: "DeFi",
        status: "Live",
        website: "https://joule.finance",
        documentation: "https://docs.joule.finance",
        twitter: "@joulefinance",
        discord: "https://discord.gg/joule",
        keyFeatures: [
            "Cross-chain bridge via LayerZero",
            "Money markets for lending/borrowing",
            "Leveraged yield farming up to 5x",
            "Liquidity anchors for efficiency",
            "Efficiency mode for stables",
            "Isolated lending positions"
        ],
        prerequisites: [
            "Aptos or Movement wallet",
            "APT or MOVE for gas",
            "Assets to lend or farm",
            "Understanding of leverage risks"
        ],
        howToUse: [
            { step: 1, title: "Connect Wallet", description: "Connect Petra, Martian, or any Aptos/Movement compatible wallet." },
            { step: 2, title: "Bridge Assets", description: "Use LayerZero bridge to transfer assets from EVM chains if needed." },
            { step: 3, title: "Supply Collateral", description: "Deposit assets to earn interest and enable borrowing power." },
            { step: 4, title: "Borrow Assets", description: "Borrow against collateral maintaining safe health factor." },
            { step: 5, title: "Leverage Farm", description: "Use borrowed assets to create leveraged yield farming positions." }
        ],
        tips: [
            "Start with 2x leverage maximum",
            "Monitor health factor closely",
            "Use efficiency mode for stable pairs",
            "Set up position alerts"
        ],
        strategies: [
            {
                name: "Stable Farming",
                apy: "15-25%",
                description: "USDC/USDT with 3x leverage in efficiency mode"
            },
            {
                name: "APT Staking Loop",
                apy: "20-35%",
                description: "Supply stAPT, borrow APT, repeat for leveraged staking"
            },
            {
                name: "Delta Neutral",
                apy: "10-15%",
                description: "Long spot, short perp for market-neutral yields"
            }
        ],
        metrics: {
            tvl: "$45M",
            totalBorrowed: "$28M",
            uniqueUsers: "12,000+",
            bridgeVolume: "$150M+"
        },
        securityStatus: {
            audited: true,
            auditors: ["OtterSec", "Zellic"],
            riskLevel: "Medium",
            riskDescription: "Leveraged positions carry liquidation risk. Protocol audited but use leverage carefully."
        },
        faq: [
            {
                question: "What's the liquidation penalty?",
                answer: "5% liquidation penalty plus a 2.5% fee to liquidators. Always maintain safe health factor above 1.2."
            },
            {
                question: "How does efficiency mode work?",
                answer: "When borrowing similar assets (like stables), you get higher LTV ratios due to lower volatility risk."
            }
        ],
        logo: { text: "J", gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }
    },
    "snowball-money": {
        id: "snowball-money",
        name: "Snowball Money",
        slug: "snowball-money",
        tagline: "Modular naming service for the multi-chain future",
        description: "Snowball Money provides a universal naming service that works across all major blockchains, replacing complex addresses with human-readable names like 'alice.snow' for easy crypto transfers.",
        extendedDescription: "Unlike traditional single-chain name services, Snowball's modular architecture allows one name to resolve to addresses on multiple chains, simplifying the multi-chain user experience.",
        category: "Tools",
        status: "Live",
        website: "https://snowball.money",
        documentation: "https://docs.snowball.money",
        twitter: "@snowballmoney",
        discord: "https://discord.gg/snowball",
        keyFeatures: [
            "Multi-chain name resolution",
            "One name for all addresses",
            "Subdomain management",
            "Integration with major wallets",
            "Decentralized profile pages",
            "Name marketplace"
        ],
        prerequisites: [
            "Wallet on supported chains",
            "Small amount for registration fee",
            "Unique name availability"
        ],
        howToUse: [
            { step: 1, title: "Search Names", description: "Visit snowball.money and search for your desired .snow name availability." },
            { step: 2, title: "Register Name", description: "Pay registration fee (usually $5-20/year) to claim your name." },
            { step: 3, title: "Set Addresses", description: "Configure which addresses your name resolves to on each blockchain." },
            { step: 4, title: "Create Profile", description: "Optionally create a decentralized profile page at yourname.snow." },
            { step: 5, title: "Use Everywhere", description: "Share your .snow name instead of addresses for all crypto transactions." }
        ],
        tips: [
            "Register common names early",
            "Set up all chain addresses at once",
            "Enable IPFS hosting for profiles",
            "Consider multi-year registration discounts"
        ],
        metrics: {
            registeredNames: "100,000+",
            supportedWallets: "15+",
            monthlyTransfers: "500,000+",
            avgSaved: "45 seconds per transaction"
        },
        securityStatus: {
            audited: true,
            auditors: ["Code4rena"],
            riskLevel: "Low",
            riskDescription: "Decentralized registry with no custody of funds. Names are NFTs you fully control."
        },
        faq: [
            {
                question: "Can I transfer my name?",
                answer: "Yes, names are NFTs that can be transferred or sold on any NFT marketplace."
            },
            {
                question: "What if I forget to renew?",
                answer: "30-day grace period after expiration before names become available to others."
            }
        ],
        logo: { text: "S", backgroundColor: "#06b6d4" }
    },
    "laniakea": {
        id: "laniakea",
        name: "Laniakea",
        slug: "laniakea",
        tagline: "AAA Web3 MMORPG with true digital ownership",
        description: "Laniakea is a massive multiplayer online RPG that combines AAA gaming quality with blockchain technology, featuring a player-driven economy where every item is a tradeable NFT.",
        extendedDescription: "Built on high-performance blockchain infrastructure, Laniakea offers stunning graphics, immersive gameplay, and true ownership of in-game assets, allowing players to earn while enjoying a premium gaming experience.",
        category: "Gaming",
        status: "Beta",
        website: "https://laniakea.game",
        documentation: "https://docs.laniakea.game",
        twitter: "@laniakeagame",
        discord: "https://discord.gg/laniakea",
        keyFeatures: [
            "AAA graphics quality",
            "Player-owned economy",
            "Cross-platform play",
            "NFT items and land",
            "Guild warfare system",
            "Play-to-earn mechanics"
        ],
        prerequisites: [
            "Gaming PC or next-gen console",
            "Laniakea account",
            "LANIA tokens for marketplace",
            "10GB storage space"
        ],
        howToUse: [
            { step: 1, title: "Download Client", description: "Download the Laniakea game client for your platform (PC, PlayStation, Xbox)." },
            { step: 2, title: "Create Character", description: "Design your unique character and choose starting class and faction." },
            { step: 3, title: "Complete Tutorial", description: "Learn combat, crafting, and blockchain features through the intro questline." },
            { step: 4, title: "Join Guild", description: "Find a guild to access group content and territory warfare." },
            { step: 5, title: "Trade & Earn", description: "Craft, trade, and sell items on the blockchain marketplace for real value." }
        ],
        tips: [
            "Join a guild early for better progression",
            "Focus on one crafting profession",
            "Save rare materials for high-tier items",
            "Participate in world events for best rewards"
        ],
        metrics: {
            betaPlayers: "50,000+",
            dailyActive: "15,000+",
            itemsTraded: "$2M+ monthly",
            avgPlaytime: "3.5 hours/day"
        },
        securityStatus: {
            audited: true,
            auditors: ["Halborn"],
            riskLevel: "Low",
            riskDescription: "Game assets are NFTs with real value. Standard gaming and crypto risks apply."
        },
        faq: [
            {
                question: "Is it pay-to-win?",
                answer: "No. All powerful items must be earned through gameplay. Marketplace is for cosmetics and crafted items."
            },
            {
                question: "Can I play without crypto?",
                answer: "Yes, free-to-play with optional Web3 features. Crypto enhances but doesn't gate content."
            }
        ],
        logo: { text: "L", gradient: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)" }
    },
    "tender": {
        id: "tender",
        name: "Tender",
        slug: "tender",
        tagline: "Crypto payment gateway for global merchants",
        description: "Tender enables businesses worldwide to accept cryptocurrency payments with instant conversion to stablecoins or fiat, featuring low fees and seamless integration.",
        extendedDescription: "Built for the real world, Tender bridges the gap between crypto and commerce by providing merchants with easy-to-use payment tools while giving customers the freedom to pay with their preferred cryptocurrencies.",
        category: "DeFi",
        status: "Live",
        website: "https://tender.cash",
        documentation: "https://docs.tender.cash",
        twitter: "@tendercash",
        discord: null,
        keyFeatures: [
            "One-click merchant onboarding",
            "Instant fiat conversion option",
            "Multi-currency support",
            "QR code payments",
            "E-commerce plugins",
            "Real-time analytics dashboard"
        ],
        prerequisites: [
            "Business registration",
            "Bank account (for fiat settlement)",
            "Website or physical store",
            "KYB verification"
        ],
        howToUse: [
            { step: 1, title: "Merchant Sign-up", description: "Register your business and complete KYB verification process." },
            { step: 2, title: "Integration Setup", description: "Install plugins for your e-commerce platform or set up API integration." },
            { step: 3, title: "Configure Payments", description: "Choose accepted cryptocurrencies and settlement preferences (crypto or fiat)." },
            { step: 4, title: "Start Accepting", description: "Display Tender payment option at checkout or generate QR codes for in-person sales." },
            { step: 5, title: "Track & Withdraw", description: "Monitor transactions via dashboard and withdraw settlements daily." }
        ],
        tips: [
            "Offer crypto payment discounts",
            "Enable multiple settlement options",
            "Use webhooks for order automation",
            "Display accepted crypto prominently"
        ],
        metrics: {
            merchantsActive: "5,000+",
            monthlyVolume: "$25M+",
            countries: "120+",
            avgTransaction: "$85"
        },
        securityStatus: {
            audited: true,
            auditors: ["PeckShield"],
            riskLevel: "Low",
            riskDescription: "Non-custodial payment processor. Merchants control their funds at all times."
        },
        faq: [
            {
                question: "How fast is fiat settlement?",
                answer: "Same-day settlement for verified merchants, next-day for standard accounts."
            },
            {
                question: "Are there monthly fees?",
                answer: "No monthly fees. Pay only 0.9% per successful transaction."
            }
        ],
        logo: { text: "T", backgroundColor: "#10b981" }
    },
    "blazpay": {
        id: "blazpay",
        name: "Blazpay",
        slug: "blazpay",
        tagline: "AI-powered crypto SuperApp for everyone",
        description: "Blazpay combines payment processing, DeFi services, and AI assistance in one intuitive app, making crypto accessible to mainstream users with smart automation and natural language commands.",
        extendedDescription: "Powered by advanced AI, Blazpay understands user intent and automates complex crypto operations, from simple payments to yield optimization, all through conversational interactions.",
        category: "Tools",
        status: "Live",
        website: "https://blazpay.com",
        documentation: "https://docs.blazpay.com",
        twitter: "@blazpay",
        discord: "https://discord.gg/blazpay",
        keyFeatures: [
            "AI-powered crypto assistant",
            "Natural language transactions",
            "Automated DeFi strategies",
            "Multi-chain portfolio tracking",
            "Bill payments with crypto",
            "Savings goals automation"
        ],
        prerequisites: [
            "Smartphone (iOS/Android)",
            "Email verification",
            "Initial deposit ($10 minimum)",
            "KYC for full features"
        ],
        howToUse: [
            { step: 1, title: "Download App", description: "Get Blazpay from App Store or Google Play and create your account." },
            { step: 2, title: "Set Up AI Assistant", description: "Configure your AI preferences and risk tolerance for automated features." },
            { step: 3, title: "Fund Account", description: "Deposit crypto or buy with card/bank transfer directly in the app." },
            { step: 4, title: "Use Natural Commands", description: "Tell the AI what you want: 'Send $50 to Mom' or 'Find me 20% APY'." },
            { step: 5, title: "Automate & Relax", description: "Set up recurring payments, savings goals, and let AI optimize your yields." }
        ],
        tips: [
            "Train the AI with your preferences",
            "Use voice commands for quick actions",
            "Set up price alerts for volatility",
            "Review AI suggestions before confirming"
        ],
        metrics: {
            downloads: "500,000+",
            monthlyActive: "150,000+",
            aiQueries: "1M+ daily",
            userSatisfaction: "4.8/5 stars"
        },
        securityStatus: {
            audited: true,
            auditors: ["Trail of Bits"],
            riskLevel: "Low",
            riskDescription: "Bank-grade security with AI safeguards. Always review AI suggestions before executing."
        },
        faq: [
            {
                question: "Can AI access my funds?",
                answer: "No. AI can only suggest actions. All transactions require your explicit approval via biometrics."
            },
            {
                question: "What can I ask the AI?",
                answer: "Anything crypto-related: send money, find yields, explain DeFi, optimize gas, track portfolios, and more."
            }
        ],
        logo: { text: "B", gradient: "linear-gradient(135deg, #f97316 0%, #eab308 100%)" }
    },
    "agdex": {
        id: "agdex",
        name: "AGDEX",
        slug: "agdex",
        tagline: "Professional perpetuals trading with up to 100x leverage",
        description: "AGDEX is a decentralized perpetuals exchange offering professional-grade trading with deep liquidity, up to 100x leverage, and advanced order types on Movement blockchain.",
        extendedDescription: "Built for serious traders, AGDEX combines CEX-like performance with DeFi transparency, featuring cross-margin accounts, portfolio margining, and institutional-grade risk management.",
        category: "DeFi",
        status: "Live",
        website: "https://agdex.io",
        documentation: "https://docs.agdex.io",
        twitter: "@agdexio",
        discord: "https://discord.gg/agdex",
        keyFeatures: [
            "Up to 100x leverage trading",
            "Cross-margin accounts",
            "Advanced order types",
            "Portfolio margining",
            "Sub-millisecond execution",
            "Mobile trading app"
        ],
        prerequisites: [
            "Movement wallet",
            "USDC for collateral",
            "Understanding of leveraged trading",
            "Risk management knowledge"
        ],
        howToUse: [
            { step: 1, title: "Connect & Deposit", description: "Connect wallet and deposit USDC as collateral for trading." },
            { step: 2, title: "Choose Market", description: "Select from 50+ perpetual markets including crypto, forex, and commodities." },
            { step: 3, title: "Set Position", description: "Choose leverage (1-100x), position size, and order type (market/limit/stop)." },
            { step: 4, title: "Manage Risk", description: "Set stop-loss and take-profit orders. Monitor margin levels carefully." },
            { step: 5, title: "Track P&L", description: "Monitor positions in real-time and close when targets are reached." }
        ],
        tips: [
            "Start with low leverage until experienced",
            "Always use stop-loss orders",
            "Monitor funding rates for costs",
            "Use limit orders for better entry"
        ],
        strategies: [
            {
                name: "Scalping",
                leverage: "20-50x",
                description: "Quick trades on small movements"
            },
            {
                name: "Swing Trading",
                leverage: "5-20x",
                description: "Hold positions for days/weeks"
            },
            {
                name: "Hedging",
                leverage: "1-5x",
                description: "Protect spot positions with shorts"
            }
        ],
        metrics: {
            dailyVolume: "$150M+",
            openInterest: "$75M",
            traders: "25,000+",
            markets: "50+"
        },
        securityStatus: {
            audited: true,
            auditors: ["Quantstamp", "CertiK"],
            riskLevel: "High",
            riskDescription: "Leveraged trading carries significant risk of loss. Liquidation can result in total loss of collateral."
        },
        faq: [
            {
                question: "What happens at liquidation?",
                answer: "Positions are liquidated when margin falls below maintenance level (0.5%). A 0.6% liquidation fee applies."
            },
            {
                question: "Are there trading fees?",
                answer: "Maker: 0.02%, Taker: 0.06%. Volume discounts available for high-volume traders."
            }
        ],
        logo: { text: "A", backgroundColor: "#dc2626" }
    }
};

// Export for Node.js (generator script)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { partnersData };
}
