import React from 'react';
import {
    CSTable,
    CSTableHeader,
    CSTableBody,
    CSTableRow,
    CSTableCell,
    CSButton,
    CSInputSearch,
    CSModal,
    CSModalHeader,
    CSModalBody,
    CSModalFooter, CSInputText,
} from '@cloudsense/cs-ui-components';

interface CSModalPreviewState {
    visibleModal?: string;
    secondModalVisible: boolean;
    thirdModalVisible: boolean;
}

class CPGrid extends React.Component<CSModalPreviewState> {
    state = {
        visibleModal: undefined,
        secondModalVisible: false,
        thirdModalVisible: false
    };

    openModal = (modalId: string) => {
        this.setState({ visibleModal: modalId });
    }
    closeModal = () => {
        this.setState({ visibleModal: undefined });
    }

    render() {
        return (
            <div className="table-wrapper">

                <CSModal
                    visible={this.state.visibleModal === 'commercial-product-details'}
                    size="medium"
                    animated
                    outerClickClose
                    closeButton
                    onClose={this.closeModal}
                    className="cp-details-modal"
                >
                    <CSModalHeader title="Set List Price of Existing Commercial Product">

                    </CSModalHeader>
                    <CSModalBody padding="1.5rem 1.5rem 1rem 1.5rem">
                        <CSButton
                            className="prepopulate-btn"
                            label="prepopulate data"
                            labelHidden
                            iconName="edit"
                            btnType="transparent"
                            btnStyle="brand"
                        />
                        <div className="column-wrapper">
                            <CSInputText label="Commercial Product" />
                            <div className="placeholder"></div>
                            <CSInputText label="List Recurring Charge" />
                            <div className="btn-label-wrapper">
                                <span>Pricing Rule</span>
                                <CSButton
                                    className="open-modal-btn"
                                    label="New price rule"
                                    onClick={() => this.setState({ secondModalVisible: true })}
                                />
                            </div>
                            <CSInputText label="List One Off Charge" />
                            <div className="btn-label-wrapper">
                                <span>Pricing Rule Group</span>
                                <CSButton
                                    className="open-modal-btn"
                                    label="New price rule group"
                                    onClick={() => this.setState({ thirdModalVisible: true })}
                                />
                            </div>
                        </div>
                    </CSModalBody>
                    <CSModalFooter align="right">
                        <CSButton
                            label="Cancel"
                            onClick={this.closeModal}
                        />
                        <CSButton
                            label="Save and Deploy"
                            btnStyle="brand"
                            onClick={this.closeModal}
                        />
                        <CSButton
                            label="Save"
                            btnStyle="brand"
                            onClick={this.closeModal}
                        />
                    </CSModalFooter>
                </CSModal>
                <CSModal
                    visible={this.state.secondModalVisible}
                    size="small"
                    animated
                    outerClickClose
                    closeButton
                    onClose={() => this.setState({ secondModalVisible: false })}
                    className="cp-details-modal-second"
                >
                    <CSModalHeader title="New Price Rule" />
                    <CSModalBody padding="1.5rem 1.5rem 1rem 1.5rem">
                        <div className="column-wrapper">
                            <div className="col">
                                <CSInputText label="Pricing Rule Name" />
                                <CSInputText label="Pricing Rule Code" />
                            </div>
                            <div className="col">
                                <CSInputText label="Context" />
                                <CSInputText label="Description" />
                            </div>
                        </div>
                    </CSModalBody>
                    <CSModalFooter align="right">
                        <CSButton
                            label="Cancel"
                            onClick={() => this.setState({ secondModalVisible: false })}
                        />
                        <CSButton
                            label="Save and New"
                            btnStyle="brand"
                            onClick={() => this.setState({ secondModalVisible: false })}
                        />
                        <CSButton
                            label="Save"
                            btnStyle="brand"
                            onClick={() => this.setState({ secondModalVisible: false })}
                        />
                    </CSModalFooter>
                </CSModal>
                <CSModal
                    visible={this.state.thirdModalVisible}
                    size="small"
                    animated
                    outerClickClose
                    closeButton
                    onClose={() => this.setState({ thirdModalVisible: false })}
                    className="cp-details-modal-second"
                >
                    <CSModalHeader title="New Price Rule" />
                    <CSModalBody padding="1.5rem 1.5rem 1rem 1.5rem">
                        <div className="column-wrapper">
                            <div className="col">
                                <CSInputText label="Pricing Rule Group Name" />
                                <CSInputText label="Pricing Rule Group Code" />
                            </div>
                            <div className="col">
                                <CSInputText label="Priority" />
                                <CSInputText label="Description" />
                            </div>
                            <div className="col">
                                <CSInputText label="Rule Group Compounding Type" />
                            </div>
                        </div>
                    </CSModalBody>
                    <CSModalFooter align="right">
                        <CSButton
                            label="Cancel"
                            onClick={() => this.setState({ thirdModalVisible: false })}
                        />
                        <CSButton
                            label="Save and New"
                            btnStyle="brand"
                            onClick={() => this.setState({ thirdModalVisible: false })}
                        />
                        <CSButton
                            label="Save"
                            btnStyle="brand"
                            onClick={() => this.setState({ thirdModalVisible: false })}
                        />
                    </CSModalFooter>
                </CSModal>

                <div className="action-row">
                    <CSButton label="Create New Product" onClick={() => this.openModal('commercial-product-details')} />
                    <CSInputSearch placeholder="Search" width="20rem" />
                </div>
                <CSTable>
                    <CSTableHeader>
                        <CSTableCell text="Details" maxWidth="4rem" />
                        <CSTableCell text="Commercial Product Description" grow={2} />
                        <CSTableCell text="List Recurring Charge" />
                        <CSTableCell text="Pricing Rule" />
                        <CSTableCell text="List One Off Charge" />
                        <CSTableCell text="Pricing Rule Group" />
                    </CSTableHeader>
                    <CSTableBody>
                        <CSTableRow>
                            <CSTableCell maxWidth="4rem">
                                <CSButton
                                    label="label"
                                    labelHidden
                                    btnType="default"
                                    iconName="apps"
                                    size="xsmall"
                                    onClick={() => this.openModal('commercial-product-details')}
                                />
                            </CSTableCell>
                            <CSTableCell text="First Row Item 1" grow={2} />
                            <CSTableCell text="First Row Item 2" />
                            <CSTableCell text="First Row Item 3" />
                            <CSTableCell text="First Row Item 4" />
                            <CSTableCell text="First Row Item 5" />
                        </CSTableRow>
                    </CSTableBody>
                </CSTable>
            </div>
        );
    }
}

export default CPGrid;
