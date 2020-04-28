import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BalancesTable from './BalancesTable';
import { observer } from 'mobx-react';

const STabs = styled(Tabs)`
    -webkit-tap-highlight-color: transparent;
    width: 100%;
`;

const STabList = styled(TabList)`
    border-bottom: 1px solid #aaa;
    margin: 0 0 10px;
    padding: 0;
`;

const STab = styled(Tab)`
    font-family: Roboto;
    display: inline-block;
    border: 1px solid transparent;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;
    &.react-tabs__tab--selected {
        background: #fff;
        border-color: #aaa;
        color: black;
        border-radius: 5px 5px 0 0;
    }
    &.react-tabs__tab--disabled {
        color: GrayText;
        cursor: default;
    }
    &.react-tabs__tab:focus {
        box-shadow: 0 0 5px hsl(208, 99%, 50%);
        border-color: hsl(208, 99%, 50%);
        outline: none;
    }
    &.react-tabs__tab:focus:after {
        content: '';
        position: absolute;
        height: 5px;
        left: -4px;
        right: -4px;
        bottom: -5px;
        background: #fff;
    }
`;

const STabPanel = styled(TabPanel)`
    display: none;
    &.react-tabs__tab-panel--selected {
        display: block;
    }
`;

interface Props {
    poolAddress: string;
}

const PoolTabs = observer((props: Props) => {
    const { poolAddress } = props;

    return (
        <STabs>
            <STabList>
                <STab>Balances</STab>
                <STab>Swaps</STab>
            </STabList>

            <STabPanel>
                <BalancesTable poolAddress={poolAddress} />
            </STabPanel>
            <STabPanel>
                <h2>Swaps Info</h2>
            </STabPanel>
        </STabs>
    );
});

export default PoolTabs;
