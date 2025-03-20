import styles from "./ProductOptions.module.css";
import { checkInStock } from "@/lib/utils";
import { products } from "@wix/stores";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

interface ProductOptionsProps {
  product: products.Product;
  selectedOptions: Record<string, string>;
  setSelectedOptions: (options: Record<string, string>) => void;
}

export default function ProductOptions({
  product,
  selectedOptions,
  setSelectedOptions,
}: ProductOptionsProps) {
  // Helper function to check if an option is the Size option
  const isSizeOption = (option: products.ProductOption) =>
    option.name?.toLowerCase() === "size";

  return (
    <div className={styles.container}>
      {product.productOptions?.map((option) => (
        <fieldset key={option.name} className={styles.fieldset}>
          <legend className={styles.legend}>{option.name}</legend>
          <div className={styles.optionContainer}>
            {isSizeOption(option)
              ? option.choices?.map((choice, index) => {
                  const sizeValue = choice.description || choice.value || "";
                  const isSelected =
                    selectedOptions[option.name || ""] === sizeValue;
                  const isDisabled = !checkInStock(product, {
                    ...selectedOptions,
                    [option.name || ""]: sizeValue,
                  });

                  return (
                    <div
                      key={sizeValue || `option-${index}`}
                      className={styles.sizeButtonContainer}
                    >
                      <FalseButton
                        text={sizeValue}
                        btnType={isSelected ? "primaryii" : "primaryiii"}
                        onClick={() => {
                          if (!isDisabled) {
                            setSelectedOptions({
                              ...selectedOptions,
                              [option.name || ""]: sizeValue,
                            });
                          }
                        }}
                        disabled={isDisabled}
                      />
                    </div>
                  );
                })
              : // Color options with radio buttons (original code)
                option.choices?.map((choice, index) => (
                  <div
                    key={choice.description || `option-${index}`}
                    className={styles.optionChoice}
                  >
                    <input
                      type='radio'
                      id={`${option.name}-${choice.description || index}`}
                      name={option.name}
                      value={choice.description || ""}
                      onChange={() =>
                        setSelectedOptions({
                          ...selectedOptions,
                          [option.name || ""]:
                            choice.description || choice.value || "",
                        })
                      }
                      checked={
                        selectedOptions[option.name || ""] ===
                        (choice.description || choice.value || "")
                      }
                      className={styles.radioInput}
                      disabled={
                        !checkInStock(product, {
                          ...selectedOptions,
                          [option.name || ""]: choice.description || "",
                        })
                      }
                    />
                    <label
                      htmlFor={`${option.name}-${choice.description || index}`}
                      className={styles.radioLabel}
                    >
                      <span
                        className={styles.colorSwatch}
                        style={{
                          backgroundColor: choice.value,
                        }}
                      />
                      <span className={styles.choiceDescription}>
                        {choice.description || choice.value || ""}
                      </span>
                    </label>
                  </div>
                ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
}
