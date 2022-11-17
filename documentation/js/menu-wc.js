'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">twin3-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a908a918ecccbd9ac1b797147efd55c584679434d4909254815480763132c0fff41e3931eadc948f482bb20182e3a61660fdd0d8b0347c745b59d5d991cb9b9e"' : 'data-target="#xs-components-links-module-AppModule-a908a918ecccbd9ac1b797147efd55c584679434d4909254815480763132c0fff41e3931eadc948f482bb20182e3a61660fdd0d8b0347c745b59d5d991cb9b9e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a908a918ecccbd9ac1b797147efd55c584679434d4909254815480763132c0fff41e3931eadc948f482bb20182e3a61660fdd0d8b0347c745b59d5d991cb9b9e"' :
                                            'id="xs-components-links-module-AppModule-a908a918ecccbd9ac1b797147efd55c584679434d4909254815480763132c0fff41e3931eadc948f482bb20182e3a61660fdd0d8b0347c745b59d5d991cb9b9e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductsModule-faa2085da89cae11213b864c3c8b6618bd08e8538c3c8752cd9723e44aad15d74b73f9a1c10b7942e8e11622d0ef5b4235a898aaa978d2a97226a54e7f2dcff1"' : 'data-target="#xs-components-links-module-ProductsModule-faa2085da89cae11213b864c3c8b6618bd08e8538c3c8752cd9723e44aad15d74b73f9a1c10b7942e8e11622d0ef5b4235a898aaa978d2a97226a54e7f2dcff1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsModule-faa2085da89cae11213b864c3c8b6618bd08e8538c3c8752cd9723e44aad15d74b73f9a1c10b7942e8e11622d0ef5b4235a898aaa978d2a97226a54e7f2dcff1"' :
                                            'id="xs-components-links-module-ProductsModule-faa2085da89cae11213b864c3c8b6618bd08e8538c3c8752cd9723e44aad15d74b73f9a1c10b7942e8e11622d0ef5b4235a898aaa978d2a97226a54e7f2dcff1"' }>
                                            <li class="link">
                                                <a href="components/AdminProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsRoutingModule.html" data-type="entity-link" >ProductsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-beb185c8b1fee32c54f3ad822a2cff51628d993172e8c31ab3bd5cae6346ffea19c5039ba5ba0549697f40547344b8cacc9f4705441a6dd1cc6581162235c3d6"' : 'data-target="#xs-components-links-module-UsersModule-beb185c8b1fee32c54f3ad822a2cff51628d993172e8c31ab3bd5cae6346ffea19c5039ba5ba0549697f40547344b8cacc9f4705441a6dd1cc6581162235c3d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-beb185c8b1fee32c54f3ad822a2cff51628d993172e8c31ab3bd5cae6346ffea19c5039ba5ba0549697f40547344b8cacc9f4705441a6dd1cc6581162235c3d6"' :
                                            'id="xs-components-links-module-UsersModule-beb185c8b1fee32c54f3ad822a2cff51628d993172e8c31ab3bd5cae6346ffea19c5039ba5ba0549697f40547344b8cacc9f4705441a6dd1cc6581162235c3d6"' }>
                                            <li class="link">
                                                <a href="components/FormUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginTestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link" >UsersRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatsService.html" data-type="entity-link" >StatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});