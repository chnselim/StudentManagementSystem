/*
 * File: app/view/Silinebilir.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('StudentManagementSystem.view.Silinebilir', {
    extend: 'Ext.container.Container',
    alias: 'widget.silinebilir',

    requires: [
        'StudentManagementSystem.view.SilinebilirViewModel',
        'StudentManagementSystem.view.SilinebilirViewController',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.Img',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Column'
    ],

    controller: 'silinebilir',
    viewModel: {
        type: 'silinebilir'
    },
    height: 250,
    width: 400,

    items: [
        {
            xtype: 'panel',
            height: 662,
            width: 990,
            title: 'HAFTALIK DERS PROGRAMI',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    height: 35,
                    items: [
                        {
                            xtype: 'combobox',
                            height: 24,
                            margin: '0 0 0 2',
                            width: 252,
                            fieldLabel: 'Bölümünüz',
                            readOnly: false,
                            displayField: 'department',
                            queryMode: 'local',
                            store: 'DepartmentStore',
                            valueField: 'department'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    reference: 'courseTab',
                    itemId: 'courseTab',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            height: 542,
                            title: '1. SINIF',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    margin: 5,
                                    items: [
                                        {
                                            xtype: 'button',
                                            margin: '',
                                            href: 'http://sablon.mu.edu.tr/Icerik/bilmuh.mu.edu.tr/Belge/8d4f3cb7-196.pdf',
                                            text: 'Ders Programını İndir'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'image',
                                    height: 538,
                                    width: 988,
                                    src: 'img/eng1.PNG'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: '2. SINIF'
                        },
                        {
                            xtype: 'panel',
                            title: '3.SINIF'
                        },
                        {
                            xtype: 'panel',
                            title: '4.SINIF'
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: 'onDersProgPanelAfterRender'
            }
        },
        {
            xtype: 'panel',
            reference: 'notlarPage',
            height: 413,
            itemId: 'notlarPage',
            width: 730,
            title: 'Notlar',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    height: 411,
                    viewConfig: {
                        width: 726
                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            text: 'Ders Adı'
                        },
                        {
                            xtype: 'gridcolumn',
                            text: 'Vize 1'
                        },
                        {
                            xtype: 'gridcolumn',
                            text: 'Vize 2'
                        },
                        {
                            xtype: 'gridcolumn',
                            text: 'Final'
                        },
                        {
                            xtype: 'gridcolumn',
                            text: 'Ortalama'
                        },
                        {
                            xtype: 'gridcolumn',
                            text: 'Harf Notu'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 128,
                            text: 'Durum'
                        }
                    ]
                }
            ]
        }
    ]

});