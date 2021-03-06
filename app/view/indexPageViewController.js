/*
 * File: app/view/indexPageViewController.js
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

Ext.define('StudentManagementSystem.view.indexPageViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.indexpage',

    onButNotlarClick: function(button, e, eOpts) {
        var refs = this.getReferences();
        var myForm = new Ext.form.Panel({

            floating: true,
            closable : true,
            modal:true,
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

        });
        myForm.show();
    },

    onButTranskriptSenaryosuClick: function(button, e, eOpts) {
        var controller=this;
        var refs = controller.getReferences();
        var transkriptPageView = Ext.create('StudentManagementSystem.view.transkriptPage',
            {
                title : ''
            }
            //information_c_no: refs.txtClass.text,
            //grid_c_no: refs.lesClass.getView().managedListeners[0].item.store.data.items[0].data.lesClass
            //grid_c_name: refs.lesClass.getView().managedListeners[0].item.store.data.items[0].data.lesName
            );

        var wind=Ext.create('Ext.Window',{
            width: 990,
            height: 470,
            itemId:'transkriptPage',
            items:[transkriptPageView],
            title:'TRANSKRİPT SENARYOSU',
            modal:true,
            closeAction:'destroy',
            resizable:false,
            closable: true,
            draggable: false,
            listeners:{
                'close':function(win){
                    transkriptPageView.close();
                }
            }
        });
        wind.show();


    },

    onButDersProgramiClick: function(button, e, eOpts) {
        var refs = this.getReferences();

        var myForm = new Ext.form.Panel({

            floating: true,
            closable : true,
            modal:true,
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
            ]
        });
        myForm.show();
    },

    onMesajGonderClick: function(button, e, eOpts) {
        var controller=this;
        var refs = controller.getReferences();

        var mesajGonderPageView = Ext.create('StudentManagementSystem.view.mesajGonderPage',
            {
                title : ''
                //class_no : refs.txtClass.getValue()
            }
            );

        var wind=Ext.create('Ext.Window',{
            width: 557,
            height: 561,
            itemId:'mesajGonderPage',
            items:[mesajGonderPageView],
            title:'MESAJ',
            modal:true,
            closeAction:'destroy',
            resizable:false,
            closable: true,
            draggable: false,
            listeners:{
                'close':function(win){
                    mesajGonderPageView.close();
                }
            }
        });
        wind.show();
    },

    onButCikisClick: function(button, e, eOpts) {
        Ext.MessageBox.confirm('Çıkış', 'Emin misiniz?',function(btn){

            if(btn === 'yes'){
                location.href = 'index.html';
            }
            else{
                MessageBox.close();
            }
        });
    },

    onMytreeviewItemClick: function(dataview, record, item, index, e, eOpts) {
        var controller=this;
        var refs = controller.getReferences();

        var transkriptPageView = Ext.create('StudentManagementSystem.view.transkriptPage',
            {
                title : ''
            }
            );

        var wind=Ext.create('Ext.Window',{
            width: 990,
            height: 470,
            itemId:'transkriptPage',
            items:[transkriptPageView],
            title:'TRANSKRİPT SENARYOSU',
            modal:true,
            closeAction:'destroy',
            resizable:false,
            closable: true,
            draggable: false,
            listeners:{
                'close':function(win){
                    transkriptPageView.close();
                }
            }
        });
        wind.show();
    },

    onDersTableRowDblClick: function(tableview, record, tr, rowIndex, e, eOpts) {
        var controller = this;
        var refs = controller.getReferences();
        var myForm = new Ext.form.Panel({
            width: 400,
            height: 250,
            title: 'DERS BİLGİSİ',
            modal: true,
            floating: true,
            closable : true,
            items: [
            {
                xtype: 'container',
                flex: 0.3,
                margin: '10 0 0 5',
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                items: [
                {
                    xtype: 'label',
                    width: 370,
                    margin: '5 0 0 0',
                    text: 'DERS KODU: ' + refs.courseList.store.data.items[rowIndex].data.lesId
                },
                {
                    xtype: 'label',
                    width: 370,
                    margin: '5 0 0 0',
                    text: 'DERS ADI: ' + refs.courseList.store.data.items[rowIndex].data.lesName
                },
                {
                    xtype: 'label',
                    width: 370,
                    margin: '5 0 0 0',
                    text: 'AKADEMİSYEN: ' + refs.courseList.store.data.items[rowIndex].data.lesTeacher
                },
                {
                    xtype: 'label',
                    width: 370,
                    margin: '5 0 0 0',
                    text: 'DERS KREDİSİ: ' + refs.courseList.store.data.items[rowIndex].data.lesCredit
                },
                {
                    xtype: 'label',
                    width: 370,
                    margin: '5 0 0 0',
                    text: 'DERS BİLGİSİ: ' + refs.courseList.store.data.items[rowIndex].data.lesInfo
                }
                ]
            }]

        });
        myForm.show();
        //Ext.MessageBox.alert(refs.courseList.store.data.items[rowIndex].data.lesName,refs.courseList.store.data.items[rowIndex].data.lesTeacher);
    },

    onIndexPageAfterRender: function(component, eOpts) {
        var controller=this;
        var refs = controller.getReferences();
        var userList = [];
        // kullanıcıları bir listeye saklar
        for (i = 0 ; i < Ext.StoreMgr.lookup("UserStore").data.length; i++){
            userList.push(Ext.StoreMgr.lookup("UserStore").data.items[i].data.txtStudentNo);
        }

        // giriş yapınca hoşgeldiniz altına isim-soyisim yazar
        if (Ext.isDefined(component.username)){

            for (k = 0; k < userList.length; k++){

                if (userList[k] === component.username){
                    refs.txtName.setText(Ext.StoreMgr.lookup("UserStore").data.items[k].data.txtName + " " +
                    Ext.StoreMgr.lookup("UserStore").data.items[k].data.txtSurname);
                    refs.txtStudentNo.setText(Ext.StoreMgr.lookup("UserStore").data.items[k].data.txtStudentNo);
                    refs.txtClass.setText(Ext.StoreMgr.lookup("UserStore").data.items[k].data.txtClass);
                    refs.txtActiveSeason.setText(Ext.StoreMgr.lookup("UserStore").data.items[k].data.txtActiveSeason);
                    refs.txtIdentifierNo.setText(Ext.StoreMgr.lookup("UserStore").data.items[k].data.txtIdentifierNo);
                    refs.txtFaculty.setText(Ext.StoreMgr.lookup("UserStore").data.items[k].data.txtFaculty);
                    refs.txtDepartment.setText(Ext.StoreMgr.lookup("UserStore").data.items[k].data.txtDepartment);
                }
            }
        }
    }

});
