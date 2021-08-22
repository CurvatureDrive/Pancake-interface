import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'LP Migration',
        href: '/migrate',
      },
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
    //   {
    //     label: 'Liquidity',
    //     href: 'https://exchange.pancakeswap.finance/#/pool',
    //   },
      {
        label: 'V1 Liquidity (Old)',
        href: '/pool',
      },
    ],
  }
]

export default config
