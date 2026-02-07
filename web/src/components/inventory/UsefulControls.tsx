import { Locale } from '../../store/locale';
import React from 'react';
import {
  FloatingPortal,
  FloatingFocusManager,
  useFloating,
  useDismiss,
  useInteractions,
  offset,
  flip,
  shift,
} from '@floating-ui/react';

interface Props {
  infoVisible: boolean;
  setInfoVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const UsefulControls: React.FC<Props> = ({ infoVisible, setInfoVisible }) => {
  const { refs, floatingStyles, context } = useFloating({
    open: infoVisible,
    onOpenChange: setInfoVisible,
    placement: 'right-start',
    middleware: [offset(8), flip(), shift()],
  });

  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([dismiss]);

  return (
    <>
      {/* BUTTON INFORMASI */}
      <button
        ref={refs.setReference}
        className="inventory-control-button"
        onClick={() => setInfoVisible((v) => !v)}
      >
        INFORMASI
      </button>

      {infoVisible && (
        <FloatingPortal>
          <FloatingFocusManager context={context}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              className="useful-controls-dialog"
            >
              <div className="useful-controls-dialog-title">
                <p>{Locale.ui_usefulcontrols || 'Informasi'}</p>
                <span
                  className="useful-controls-dialog-close"
                  onClick={() => setInfoVisible(false)}
                >
                  ✕
                </span>
              </div>

              <div className="divider" />

              <div className="useful-controls-content-wrapper">
                <p><kbd>RMB</kbd><br />{Locale.ui_rmb}</p>
                <p><kbd>ALT + LMB</kbd><br />{Locale.ui_alt_lmb}</p>
                <p><kbd>CTRL + LMB</kbd><br />{Locale.ui_ctrl_lmb}</p>
                <p><kbd>SHIFT + Drag</kbd><br />{Locale.ui_shift_drag}</p>
                <p><kbd>CTRL + SHIFT + LMB</kbd><br />{Locale.ui_ctrl_shift_lmb}</p>
              </div>
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
};

export default UsefulControls;
