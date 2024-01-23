import * as React from 'react';

interface OutbrainWidgetProps {
  dataSrc: string;
  dataWidgetId: string;
  obUserId?: string;
  obInstallationKey?: string;
  obInstallationType?: string;
  obAppVer?: string;
  isSecured?: string;
  obContentUrl?: string;
  obPortalUrl?: string;
  obBundleUrl?: string;
  obLanguage?: string;
  obPsub?: string;
  obAppId?: string;
  externalId?: string;
}

declare const OutbrainWidget: React.FC<OutbrainWidgetProps>;

export default OutbrainWidget;
